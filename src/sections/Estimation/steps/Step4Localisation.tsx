'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Satellite } from 'lucide-react';
import { useEstimationStore } from '@/lib/store';

const MAPBOX_TOKEN = 'pk.eyJ1IjoidG9tYXNzb3VzIiwiYSI6ImNtbGZiczdqZzAwN2szZm9rczBiMTBkbWMifQ.R3Lc5cdETaaQ8jkvuhaVYQ';

// La Réunion bounding box
const REUNION_BOUNDS: [number, number, number, number] = [55.2, -21.4, 55.9, -20.8];
const REUNION_CENTER: [number, number] = [55.5, -21.1];

interface Suggestion {
  place_name: string;
  center: [number, number];
}

export const Step4Localisation = () => {
  const { formData, setField } = useEstimationStore();
  const [query, setQuery] = useState(formData.adresse || '');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isSatellite, setIsSatellite] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>();

  // Init map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const initMap = async () => {
      const mapboxgl = (await import('mapbox-gl')).default;
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.accessToken = MAPBOX_TOKEN;

      const map = new mapboxgl.Map({
        container: mapContainerRef.current!,
        style: 'mapbox://styles/mapbox/light-v11',
        center: formData.coordinates ? [formData.coordinates.lng, formData.coordinates.lat] : REUNION_CENTER,
        zoom: formData.coordinates ? 15 : 10,
        maxBounds: [[54.5, -22], [56.5, -20]] as any,
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      mapRef.current = map;

      map.on('load', () => {
        setMapLoaded(true);

        // Add marker if coordinates already exist
        if (formData.coordinates) {
          addMarker(mapboxgl, formData.coordinates.lng, formData.coordinates.lat);
        }
      });
    };

    initMap();

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  const addMarker = useCallback(async (mapboxgl: any, lng: number, lat: number) => {
    if (markerRef.current) markerRef.current.remove();

    const marker = new mapboxgl.Marker({
      color: '#1B3A4B',
      draggable: isDraggable,
    })
      .setLngLat([lng, lat])
      .addTo(mapRef.current);

    marker.on('dragend', () => {
      const lngLat = marker.getLngLat();
      setField('coordinates', { lng: lngLat.lng, lat: lngLat.lat });
      reverseGeocode(lngLat.lng, lngLat.lat);
    });

    markerRef.current = marker;
  }, [isDraggable]);

  // Update marker draggable state
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setDraggable(isDraggable);
    }
  }, [isDraggable]);

  // Toggle satellite
  useEffect(() => {
    if (!mapRef.current || !mapLoaded) return;
    mapRef.current.setStyle(
      isSatellite
        ? 'mapbox://styles/mapbox/satellite-streets-v12'
        : 'mapbox://styles/mapbox/light-v11'
    );
  }, [isSatellite, mapLoaded]);

  // Geocode search
  const searchAddress = async (text: string) => {
    if (text.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(text)}.json?` +
        `access_token=${MAPBOX_TOKEN}&bbox=${REUNION_BOUNDS.join(',')}&limit=5&language=fr&types=address,place,locality,neighborhood`
      );
      const data = await res.json();
      setSuggestions(data.features || []);
      setShowSuggestions(true);
    } catch {
      setSuggestions([]);
    }
  };

  const reverseGeocode = async (lng: number, lat: number) => {
    try {
      const res = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&language=fr&types=neighborhood,locality,place`
      );
      const data = await res.json();
      if (data.features?.length) {
        const neighborhood = data.features.find((f: any) => f.place_type.includes('neighborhood'));
        const locality = data.features.find((f: any) => f.place_type.includes('locality'));
        const place = data.features.find((f: any) => f.place_type.includes('place'));

        setField('quartier', neighborhood?.text || locality?.text || '');
        setField('commune', place?.text || '');
      }
    } catch { /* silent */ }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => searchAddress(value), 300);
  };

  const handleSelectSuggestion = async (suggestion: Suggestion) => {
    const [lng, lat] = suggestion.center;
    setQuery(suggestion.place_name);
    setField('adresse', suggestion.place_name);
    setField('coordinates', { lng, lat });
    setSuggestions([]);
    setShowSuggestions(false);

    // Fly to location
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [lng, lat],
        zoom: 16,
        duration: 1500,
      });

      const mapboxgl = (await import('mapbox-gl')).default;
      setTimeout(() => addMarker(mapboxgl, lng, lat), 500);
    }

    reverseGeocode(lng, lat);
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-navy mb-1.5">
          Où se situe votre bien ?
        </h2>
        <p className="text-sm font-outfit text-navy/45 font-light">
          L'adresse permet d'affiner l'estimation selon le quartier
        </p>
      </div>

      {/* Search input */}
      <div className="relative">
        <div className="relative">
          <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30" />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
            placeholder="Tapez une adresse à La Réunion..."
            className="
              w-full h-[52px] pl-11 pr-4 rounded-xl border border-navy/10 bg-white
              text-navy font-outfit text-base
              placeholder:text-navy/25 placeholder:font-light
              focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10
              transition-all duration-200
            "
          />
        </div>

        {/* Suggestions dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute z-50 w-full mt-1 bg-white border border-navy/10 rounded-xl shadow-lg overflow-hidden"
          >
            {suggestions.map((s, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSelectSuggestion(s)}
                className="w-full text-left px-4 py-3 text-sm font-outfit text-navy/70 hover:bg-navy/[0.03] transition-colors border-b border-navy/5 last:border-0 cursor-pointer"
              >
                <MapPin size={14} className="inline mr-2 text-navy/30" />
                {s.place_name}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Map */}
      <div className="relative rounded-2xl overflow-hidden border border-navy/10">
        <div ref={mapContainerRef} className="w-full h-[300px] md:h-[380px]" />

        {/* Map controls */}
        <div className="absolute top-3 left-3 flex gap-2">
          <button
            type="button"
            onClick={() => setIsSatellite(!isSatellite)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-outfit shadow-md cursor-pointer transition-all ${
              isSatellite ? 'bg-navy text-white' : 'bg-white text-navy/70'
            }`}
          >
            <Satellite size={14} />
            Satellite
          </button>
          <button
            type="button"
            onClick={() => setIsDraggable(!isDraggable)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[12px] font-outfit shadow-md cursor-pointer transition-all ${
              isDraggable ? 'bg-navy text-white' : 'bg-white text-navy/70'
            }`}
          >
            <Navigation size={14} />
            Ajuster le pin
          </button>
        </div>
      </div>

      {/* Commune / Quartier display */}
      {(formData.commune || formData.quartier) && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-outfit text-navy/60 bg-navy/[0.03] px-4 py-3 rounded-xl"
        >
          <MapPin size={16} className="text-gold flex-shrink-0" />
          <span>
            {formData.quartier && <span className="font-medium text-navy">{formData.quartier}</span>}
            {formData.quartier && formData.commune && ', '}
            {formData.commune}
          </span>
        </motion.div>
      )}
    </div>
  );
};
