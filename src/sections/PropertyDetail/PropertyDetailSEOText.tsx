import Link from "next/link";
import type { Property } from "@/types/property";
import { getCityBySlug, getAllCities } from "@/data/cities";

interface PropertyDetailSEOTextProps {
  property: Property;
}

/**
 * Bloc de texte SEO long en bas de la page détail bien.
 * Contient H2/H3 + maillage interne vers la ville, estimation, et autres biens.
 */
export const PropertyDetailSEOText = ({ property }: PropertyDetailSEOTextProps) => {
  const city = getCityBySlug(property.citySlug);
  const allCities = getAllCities();
  const otherCities = allCities.filter((c) => c.slug !== property.citySlug);

  const typeLabels: Record<string, string> = {
    appartement: "un appartement",
    maison: "une maison",
    villa: "une villa",
    terrain: "un terrain",
    "local-commercial": "un local commercial",
  };
  const typeLabel = typeLabels[property.type] || "un bien";

  const typePluralLabels: Record<string, string> = {
    appartement: "appartements",
    maison: "maisons",
    villa: "villas",
    terrain: "terrains",
    "local-commercial": "locaux commerciaux",
  };
  const typePluralLabel = typePluralLabels[property.type] || "biens";

  return (
    <section className="relative bg-navy-100 w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="animate-fade-in-up max-w-3xl prose-estimanou">

          <h2>
            Acheter {typeLabel} à {property.cityName} : guide et conseils
          </h2>

          <p>
            Vous consultez {typeLabel} situé dans le quartier de{" "}
            <strong>{property.neighborhood}</strong> à {property.cityName}. Ce bien fait
            partie de notre catalogue de propriétés expertisées par les professionnels
            d'<strong>Estimanou</strong>, chacune accompagnée d'une fourchette d'estimation
            transparente. L'estimation de ce bien est de{" "}
            <strong>{property.estimationRange}</strong>, basée sur l'analyse des transactions
            récentes dans le secteur et les caractéristiques précises de la propriété.
          </p>

          {city && (
            <>
              <h3>Le marché immobilier à {property.cityName}</h3>
              <p>
                {property.cityName} affiche un prix moyen de{" "}
                <strong>{city.stats.avgPricePerSqm}/m²</strong> avec une évolution de{" "}
                <strong>{city.stats.priceEvolution}</strong> sur les 12 derniers mois. Le
                quartier de {property.neighborhood} se situe dans la fourchette haute/basse
                de la commune, selon son attractivité et ses équipements. Pour en savoir plus
                sur les prix par quartier et les tendances du marché local, consultez notre{" "}
                <Link href={`/estimation-immobiliere/${city.slug}`}>
                  page d'estimation immobilière à {city.name}
                </Link>
                .
              </p>

              <h3>Les quartiers de {property.cityName}</h3>
              <p>
                Chaque quartier de {property.cityName} possède ses propres caractéristiques
                et sa dynamique de prix. Voici un aperçu des principaux secteurs :
              </p>
              <ul>
                {city.neighborhoods.map((n) => (
                  <li key={n.name}>
                    <strong>{n.name}</strong> — {n.avgPricePerSqm}/m² en moyenne.{" "}
                    {n.description}
                  </li>
                ))}
              </ul>
            </>
          )}

          <h3>
            Ce qu'il faut savoir avant d'acheter {typeLabel} à {property.cityName}
          </h3>
          <p>
            L'achat d'{typeLabel} à La Réunion comporte des spécificités qu'il est important
            de connaître :
          </p>
          <ul>
            {property.type === "appartement" && (
              <>
                <li>
                  <strong>Charges de copropriété</strong> — renseignez-vous sur le montant
                  des charges, le budget prévisionnel et les travaux votés. Les copropriétés
                  à La Réunion doivent anticiper l'entretien lié au climat tropical.
                </li>
                <li>
                  <strong>Loi Carrez</strong> — la surface indiquée doit correspondre au
                  mesurage Carrez. Vérifiez que le diagnostic est à jour.
                </li>
              </>
            )}
            {(property.type === "maison" || property.type === "villa") && (
              <>
                <li>
                  <strong>État de la toiture</strong> — en zone cyclonique, la qualité de la
                  toiture est un critère majeur. Vérifiez les derniers travaux et la
                  résistance aux vents.
                </li>
                <li>
                  <strong>Terrain et clôture</strong> — assurez-vous que les limites de
                  propriété sont clairement définies (bornage). Le terrain doit être
                  cadastré.
                </li>
              </>
            )}
            {property.type === "terrain" && (
              <>
                <li>
                  <strong>Constructibilité</strong> — vérifiez le PLU (Plan Local
                  d'Urbanisme) de la commune pour connaître les règles de construction
                  applicables à la parcelle (hauteur, emprise au sol, recul).
                </li>
                <li>
                  <strong>Viabilisation</strong> — le terrain est-il viabilisé (eau,
                  électricité, assainissement, accès) ? Les coûts de viabilisation peuvent
                  représenter un budget significatif.
                </li>
              </>
            )}
            <li>
              <strong>Diagnostics obligatoires</strong> — DPE, amiante, termites (obligatoire
              à La Réunion), plomb, état des risques naturels (ERNMT). Demandez l'ensemble
              du dossier de diagnostics avant de vous engager.
            </li>
            <li>
              <strong>Frais de notaire</strong> — comptez environ 7 à 8% du prix de vente
              dans l'ancien. Dans le neuf, les frais sont réduits à environ 2 à 3%.
            </li>
            <li>
              <strong>Financement</strong> — les banques demandent généralement un apport de
              10 à 20% du prix d'achat. Une estimation professionnelle facilite l'obtention
              du prêt car elle rassure l'établissement prêteur sur la valeur du bien.
            </li>
          </ul>

          <h3>Les caractéristiques clés de ce bien</h3>
          <p>
            Ce {property.type} de <strong>{property.surface} m²</strong> dispose de{" "}
            <strong>{property.rooms} pièce{property.rooms > 1 ? "s" : ""}</strong> dont{" "}
            <strong>
              {property.bedrooms} chambre{property.bedrooms > 1 ? "s" : ""}
            </strong>{" "}
            et{" "}
            <strong>
              {property.bathrooms} salle{property.bathrooms > 1 ? "s" : ""} de bain
            </strong>
            .{" "}
            {property.landSurface && (
              <>
                Le terrain fait <strong>{property.landSurface} m²</strong>.{" "}
              </>
            )}
            {property.yearBuilt && (
              <>
                Construit en <strong>{property.yearBuilt}</strong>.{" "}
              </>
            )}
            {property.orientation && (
              <>
                Orientation <strong>{property.orientation}</strong>.{" "}
              </>
            )}
            Parmi les équipements et prestations :{" "}
            {property.features.slice(0, 5).join(", ")}.
          </p>

          <h3>
            Voir d'autres {typePluralLabel} à {property.cityName}
          </h3>
          <p>
            Ce bien ne correspond pas exactement à votre recherche ? Découvrez d'autres
            opportunités :
          </p>
          <ul>
            <li>
              <Link href={`/biens-a-vendre/${property.citySlug}`}>
                Tous les biens à vendre à {property.cityName}
              </Link>{" "}
              — appartements, maisons, villas et terrains expertisés par Estimanou.
            </li>
            <li>
              <Link href="/biens-a-vendre">
                Tous les biens à vendre à La Réunion
              </Link>{" "}
              — parcourez l'ensemble de notre catalogue avec filtres avancés.
            </li>
            {city && (
              <li>
                <Link href={`/estimation-immobiliere/${city.slug}`}>
                  Estimation immobilière à {city.name}
                </Link>{" "}
                — découvrez les prix au m², les quartiers et les tendances du marché.
              </li>
            )}
          </ul>

          <h3>Explorer les biens dans les autres villes de La Réunion</h3>
          <p>
            La Réunion offre une grande diversité de marchés immobiliers. Explorez nos
            biens dans les communes voisines :
          </p>
          <ul>
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link href={`/biens-a-vendre/${c.slug}`}>
                  Biens à vendre à {c.name}
                </Link>{" "}
                — prix moyen {c.stats.avgPricePerSqm}/m².{" "}
                <Link href={`/estimation-immobiliere/${c.slug}`}>
                  Estimation à {c.name}
                </Link>
                .
              </li>
            ))}
          </ul>

          <h3>Vendez votre bien à {property.cityName}</h3>
          <p>
            Vous êtes propriétaire à {property.cityName} et souhaitez vendre ?{" "}
            <strong>Estimanou</strong> vous propose une{" "}
            <a href="/estimer">
              estimation gratuite et sans engagement
            </a>{" "}
            de votre bien. Nos experts locaux connaissent le marché de {property.cityName}{" "}
            dans ses moindres détails et vous accompagnent de l'estimation à la vente. Le
            délai moyen de vente à {property.cityName} est de{" "}
            {city?.stats.avgSaleTime || "quelques semaines"} pour les biens correctement
            estimés.
          </p>

        </div>
      </div>
    </section>
  );
};
