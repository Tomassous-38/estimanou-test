import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SurfaceInputProps {
  label: string;
  value: number | null;
  onChange: (value: number | null) => void;
  unit?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  showSlider?: boolean;
}

export const SurfaceInput = ({
  label,
  value,
  onChange,
  unit = 'm²',
  min = 0,
  max = 10000,
  placeholder = '120',
  showSlider = true,
}: SurfaceInputProps) => {
  const [inputValue, setInputValue] = useState(value?.toString() ?? '');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(value?.toString() ?? '');
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(raw);
    const num = parseInt(raw);
    if (!isNaN(num) && num >= min && num <= max) {
      onChange(num);
    } else if (raw === '') {
      onChange(null);
    }
  };

  // Smart slider ranges based on unit/context
  const getSliderConfig = () => {
    if (unit === '€/mois') return { min: 0, max: 15000, step: 100 };
    if (unit === 'lots') return { min: 1, max: 30, step: 1 };
    if (placeholder === '450' || placeholder === '800' || placeholder === '300') return { min: 50, max: 5000, step: 10 };
    return { min: 10, max: 500, step: 5 };
  };

  const sliderConfig = getSliderConfig();
  const sliderValue = value ?? 0;
  const sliderPercent = Math.min(
    Math.max(((sliderValue - sliderConfig.min) / (sliderConfig.max - sliderConfig.min)) * 100, 0),
    100
  );

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value);
    setInputValue(num.toString());
    onChange(num);
  };

  const hasValue = value !== null && value > 0;

  return (
    <div className="space-y-2">
      <label className="text-sm font-outfit font-medium text-navy/80">{label}</label>
      <div className="relative group">
        <input
          ref={inputRef}
          type="text"
          inputMode="numeric"
          value={inputValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full h-[52px] px-4 pr-16 rounded-xl border bg-white
            text-navy font-outfit text-base font-medium
            placeholder:text-navy/25 placeholder:font-normal
            focus:outline-none transition-all duration-300
            ${isFocused
              ? 'border-gold/60 ring-2 ring-gold/15 shadow-[0_0_20px_rgba(184,151,90,0.08)]'
              : hasValue
                ? 'border-navy/20'
                : 'border-navy/10 hover:border-navy/20'
            }
          `}
        />
        {/* Unit badge */}
        <span className={`
          absolute right-3 top-1/2 -translate-y-1/2 text-[13px] font-outfit px-2 py-0.5 rounded-md
          transition-all duration-300
          ${hasValue ? 'bg-navy/[0.06] text-navy/60 font-medium' : 'text-navy/30'}
        `}>
          {unit}
        </span>

        {/* Animated value tooltip on focus */}
        <AnimatePresence>
          {hasValue && isFocused && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              className="absolute -top-9 left-4 bg-navy text-white text-[11px] font-outfit font-medium px-2.5 py-1 rounded-lg shadow-lg z-10"
            >
              {value?.toLocaleString('fr-FR')} {unit}
              <div className="absolute left-4 -bottom-1 w-2 h-2 bg-navy rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slider */}
      {showSlider && (
        <div className="relative h-6 flex items-center px-0.5">
          {/* Track */}
          <div className="absolute inset-x-0.5 h-1.5 rounded-full bg-navy/[0.06] overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-navy/80"
              animate={{ width: `${hasValue ? sliderPercent : 0}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          </div>
          {/* Hidden range input */}
          <input
            type="range"
            min={sliderConfig.min}
            max={sliderConfig.max}
            step={sliderConfig.step}
            value={sliderValue || sliderConfig.min}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
          />
          {/* Thumb */}
          {hasValue && (
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-white border-[2.5px] border-navy shadow-md pointer-events-none"
              animate={{ left: `calc(${sliderPercent}% - 8px)` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      )}
    </div>
  );
};
