import { motion } from 'framer-motion';
import { useEstimationStore } from '@/lib/store';
import {
  PIECES_OPTIONS, CHAMBRES_OPTIONS, SDB_OPTIONS, NIVEAUX_OPTIONS,
  NIVEAUX_IMMEUBLE_OPTIONS, ETAGE_OPTIONS, PARKINGS_OPTIONS,
  TOPOGRAPHIE_OPTIONS, VIABILISE_OPTIONS, ACCES_ROUTE_OPTIONS,
} from '@/lib/constants';
import { NumberButtonGroup } from '../ui/NumberButtonGroup';
import { SurfaceInput } from '../ui/SurfaceInput';
import { SelectCard } from '../ui/SelectCard';
import { LiveRecap } from '../ui/LiveRecap';
import type { Topographie, Viabilise, AccesRoute } from '@/lib/types';

const fieldVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export const Step2Caracteristiques = () => {
  const { formData, setField } = useEstimationStore();
  const { propertyType } = formData;

  // Build recap items
  const recapItems: string[] = [];
  if (formData.surfaceHabitable) recapItems.push(`${formData.surfaceHabitable} m²`);
  if (formData.surfaceTerrain && propertyType !== 'appartement') recapItems.push(`Terrain ${formData.surfaceTerrain} m²`);
  if (formData.nombrePieces) recapItems.push(`${formData.nombrePieces} pièces`);
  if (formData.nombreChambres) recapItems.push(`${formData.nombreChambres} ch.`);
  if (formData.nombreSallesDeBain) recapItems.push(`${formData.nombreSallesDeBain} sdb`);
  if (formData.nombreNiveaux) recapItems.push(`${formData.nombreNiveaux} niveaux`);
  if (formData.etage) recapItems.push(`Étage ${formData.etage}`);
  if (formData.ascenseur !== null) recapItems.push(formData.ascenseur ? 'Ascenseur' : 'Sans ascenseur');
  if (formData.surfaceUtile) recapItems.push(`${formData.surfaceUtile} m² utile`);
  if (formData.nombreLots) recapItems.push(`${formData.nombreLots} lots`);

  // Count filled fields for progress
  const fieldCount = recapItems.length;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-navy mb-1.5">
          Décrivez votre bien
        </h2>
        <p className="text-sm font-outfit text-navy/45 font-light">
          Ces informations nous permettent d'affiner l'estimation
        </p>
      </div>

      <div className="space-y-5">
        {/* ====== MAISON ====== */}
        {propertyType === 'maison' && (
          <>
            <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants}>
              <SurfaceInput label="Surface habitable" value={formData.surfaceHabitable} onChange={(v) => setField('surfaceHabitable', v)} placeholder="120" />
            </motion.div>
            <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
              <SurfaceInput label="Surface terrain" value={formData.surfaceTerrain} onChange={(v) => setField('surfaceTerrain', v)} placeholder="450" />
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Nombre de pièces" options={PIECES_OPTIONS} value={formData.nombrePieces} onChange={(v) => setField('nombrePieces', parseInt(v) || 6)} />
            </motion.div>
            <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Nombre de chambres" options={CHAMBRES_OPTIONS} value={formData.nombreChambres} onChange={(v) => setField('nombreChambres', parseInt(v) || 5)} />
            </motion.div>
            <motion.div custom={4} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Salles de bain / d'eau" options={SDB_OPTIONS} value={formData.nombreSallesDeBain} onChange={(v) => setField('nombreSallesDeBain', parseInt(v) || 3)} />
            </motion.div>
            <motion.div custom={5} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Nombre de niveaux" options={NIVEAUX_OPTIONS} value={formData.nombreNiveaux} onChange={(v) => setField('nombreNiveaux', parseInt(v) || 3)} />
            </motion.div>
          </>
        )}

        {/* ====== APPARTEMENT ====== */}
        {propertyType === 'appartement' && (
          <>
            <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants}>
              <SurfaceInput label="Surface habitable" value={formData.surfaceHabitable} onChange={(v) => setField('surfaceHabitable', v)} placeholder="65" />
            </motion.div>
            <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Nombre de pièces" options={PIECES_OPTIONS} value={formData.nombrePieces} onChange={(v) => setField('nombrePieces', parseInt(v) || 6)} />
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Nombre de chambres" options={CHAMBRES_OPTIONS} value={formData.nombreChambres} onChange={(v) => setField('nombreChambres', parseInt(v) || 5)} />
            </motion.div>
            <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Salles de bain / d'eau" options={SDB_OPTIONS} value={formData.nombreSallesDeBain} onChange={(v) => setField('nombreSallesDeBain', parseInt(v) || 3)} />
            </motion.div>
            <motion.div custom={4} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Étage" options={ETAGE_OPTIONS} value={formData.etage} onChange={(v) => setField('etage', v)} />
            </motion.div>
            <motion.div custom={5} initial="hidden" animate="visible" variants={fieldVariants}>
              <div className="space-y-2.5">
                <label className="text-sm font-outfit font-medium text-navy/80">Ascenseur</label>
                <div className="grid grid-cols-2 gap-2.5">
                  <SelectCard label="Oui" selected={formData.ascenseur === true} onClick={() => setField('ascenseur', true)} size="small" />
                  <SelectCard label="Non" selected={formData.ascenseur === false} onClick={() => setField('ascenseur', false)} size="small" />
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* ====== TERRAIN ====== */}
        {propertyType === 'terrain' && (
          <>
            <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants}>
              <SurfaceInput label="Surface terrain" value={formData.surfaceTerrain} onChange={(v) => setField('surfaceTerrain', v)} placeholder="800" />
            </motion.div>
            <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
              <div className="space-y-2.5">
                <label className="text-sm font-outfit font-medium text-navy/80">Topographie</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {TOPOGRAPHIE_OPTIONS.map((opt) => (
                    <SelectCard key={opt.value} label={opt.label} selected={formData.topographie === opt.value} onClick={() => setField('topographie', opt.value as Topographie)} size="small" />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
              <div className="space-y-2.5">
                <label className="text-sm font-outfit font-medium text-navy/80">Viabilisé (eau, électricité, assainissement)</label>
                <div className="grid grid-cols-3 gap-2.5">
                  {VIABILISE_OPTIONS.map((opt) => (
                    <SelectCard key={opt.value} label={opt.label} selected={formData.viabilise === opt.value} onClick={() => setField('viabilise', opt.value as Viabilise)} size="small" />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants}>
              <div className="space-y-2.5">
                <label className="text-sm font-outfit font-medium text-navy/80">Accès route</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {ACCES_ROUTE_OPTIONS.map((opt) => (
                    <SelectCard key={opt.value} label={opt.label} selected={formData.accesRoute === opt.value} onClick={() => setField('accesRoute', opt.value as AccesRoute)} size="small" />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}

        {/* ====== IMMEUBLE ====== */}
        {propertyType === 'immeuble' && (
          <>
            <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants}>
              <SurfaceInput label="Surface totale" value={formData.surfaceHabitable} onChange={(v) => setField('surfaceHabitable', v)} placeholder="500" />
            </motion.div>
            <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
              <SurfaceInput label="Surface terrain" value={formData.surfaceTerrain} onChange={(v) => setField('surfaceTerrain', v)} placeholder="300" />
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
              <SurfaceInput label="Nombre de lots / appartements" value={formData.nombreLots} onChange={(v) => setField('nombreLots', v)} unit="lots" placeholder="8" showSlider={false} />
            </motion.div>
            <motion.div custom={3} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Nombre de niveaux" options={NIVEAUX_IMMEUBLE_OPTIONS} value={formData.nombreNiveaux} onChange={(v) => setField('nombreNiveaux', parseInt(v) || 5)} />
            </motion.div>
            <motion.div custom={4} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Nombre de parkings" options={PARKINGS_OPTIONS} value={formData.nombreParkings} onChange={(v) => setField('nombreParkings', v)} />
            </motion.div>
          </>
        )}

        {/* ====== LOCAL COMMERCIAL ====== */}
        {propertyType === 'local_commercial' && (
          <>
            <motion.div custom={0} initial="hidden" animate="visible" variants={fieldVariants}>
              <SurfaceInput label="Surface utile" value={formData.surfaceUtile} onChange={(v) => setField('surfaceUtile', v)} placeholder="150" />
            </motion.div>
            <motion.div custom={1} initial="hidden" animate="visible" variants={fieldVariants}>
              <div className="space-y-2.5">
                <label className="text-sm font-outfit font-medium text-navy/80">Type d'activité actuelle</label>
                <input
                  type="text"
                  value={formData.typeActivite ?? ''}
                  onChange={(e) => setField('typeActivite', e.target.value)}
                  placeholder="Ex : restaurant, bureau, boutique..."
                  className="
                    w-full h-[52px] px-4 rounded-xl border border-navy/10 bg-white
                    text-navy font-outfit text-base
                    placeholder:text-navy/25 placeholder:font-light
                    focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10
                    transition-all duration-200
                  "
                />
              </div>
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={fieldVariants}>
              <NumberButtonGroup label="Places de parking" options={PARKINGS_OPTIONS} value={formData.nombreParkings} onChange={(v) => setField('nombreParkings', v)} />
            </motion.div>
          </>
        )}
      </div>

      {/* Progress indicator + Live recap */}
      <div className="space-y-3">
        {fieldCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-[11px] font-outfit text-navy/35"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${i < fieldCount ? 'bg-navy/40' : 'bg-navy/10'}`}
                  animate={i < fieldCount ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ delay: i * 0.05 }}
                />
              ))}
            </div>
            <span>{fieldCount} info{fieldCount > 1 ? 's' : ''} renseignée{fieldCount > 1 ? 's' : ''}</span>
          </motion.div>
        )}
        <LiveRecap items={recapItems} />
      </div>
    </div>
  );
};
