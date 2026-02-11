import Link from "next/link";
import type { CityLanding } from "@/types/city";
import { getAllCities } from "@/data/cities";

interface PropertyListSEOTextProps {
  city?: CityLanding;
}

/* ── Contenu SEO quand une ville est sélectionnée ── */
const CityPropertySEO = ({ city }: { city: CityLanding }) => {
  const allCities = getAllCities();
  const otherCities = allCities.filter((c) => c.slug !== city.slug);

  return (
    <div className="prose-estimanou">
      <h2>
        Acheter un bien immobilier à {city.name} : le guide complet
      </h2>

      <p>
        {city.name} est l'une des communes les plus recherchées de La Réunion pour
        l'acquisition immobilière. Avec un prix moyen au mètre carré de{" "}
        <strong>{city.stats.avgPricePerSqm}/m²</strong> et une évolution de{" "}
        <strong>{city.stats.priceEvolution}</strong> sur les 12 derniers mois, le marché
        immobilier de {city.name} se distingue par son dynamisme et son attractivité. Que
        vous soyez primo-accédant, investisseur locatif ou en quête d'une résidence secondaire,
        cette ville offre un panel de biens variés répondant à toutes les attentes. Chez{" "}
        <strong>Estimanou</strong>, chaque bien que nous présentons a été{" "}
        <Link href={`/estimation-immobiliere/${city.slug}`}>
          estimé par un expert local de {city.name}
        </Link>{" "}
        pour vous garantir une fourchette de prix fiable et transparente.
      </p>

      <h3>Les quartiers les plus prisés de {city.name}</h3>
      <p>
        Le choix du quartier est déterminant dans un projet d'achat immobilier. À {city.name},
        chaque secteur possède sa propre identité, ses atouts et sa dynamique de prix. Voici
        un aperçu des principaux quartiers où investir :
      </p>
      <ul>
        {city.neighborhoods.map((n) => (
          <li key={n.name}>
            <strong>{n.name}</strong> — prix moyen de {n.avgPricePerSqm}/m². {n.description}
          </li>
        ))}
      </ul>
      <p>
        En fonction de votre budget et de vos priorités (proximité des commerces, calme
        résidentiel, vue mer, accès transports), nos experts peuvent vous orienter vers le
        quartier le plus adapté. N'hésitez pas à{" "}
        <Link href={`/estimation-immobiliere/${city.slug}`}>
          consulter notre page d'estimation à {city.name}
        </Link>{" "}
        pour découvrir les spécificités de chaque secteur.
      </p>

      <h3>Quels types de biens trouve-t-on à {city.name} ?</h3>
      <p>
        Le parc immobilier de {city.name} est diversifié et permet de répondre à des profils
        d'acheteurs très différents. Parmi les biens les plus courants, on retrouve :
      </p>
      <ol>
        <li>
          <strong>Les appartements</strong> — idéaux pour un premier achat ou un investissement
          locatif, ils se concentrent principalement en centre-ville et dans les résidences
          récentes. Les surfaces vont du studio au T4 avec des prix accessibles.
        </li>
        <li>
          <strong>Les maisons individuelles</strong> — très recherchées par les familles, elles
          offrent un jardin privatif et davantage d'espace. On les trouve dans les quartiers
          résidentiels et en périphérie de {city.name}.
        </li>
        <li>
          <strong>Les villas avec piscine</strong> — segment haut de gamme, ces biens sont
          particulièrement prisés dans les secteurs de {city.neighborhoods[0]?.name} et{" "}
          {city.neighborhoods[city.neighborhoods.length - 1]?.name}. Ils représentent un
          investissement qualitatif avec un fort potentiel de valorisation.
        </li>
        <li>
          <strong>Les terrains constructibles</strong> — pour les acquéreurs souhaitant bâtir
          leur maison sur mesure, {city.name} propose des parcelles dans des zones
          constructibles avec permis délivrable.
        </li>
        <li>
          <strong>Les locaux commerciaux</strong> — le tissu économique de {city.name} offre
          des opportunités pour les entrepreneurs et investisseurs en immobilier professionnel.
        </li>
      </ol>

      <h3>Conseils pour réussir votre achat immobilier à {city.name}</h3>
      <p>
        Acheter un bien immobilier à La Réunion nécessite de bien connaître les spécificités
        locales. Voici quelques recommandations de nos experts pour mener à bien votre projet
        à {city.name} :
      </p>
      <ul>
        <li>
          <strong>Faites estimer avant d'acheter</strong> — une estimation professionnelle
          vous protège contre les surévaluations. Chez Estimanou, tous les biens affichent
          une fourchette d'estimation réalisée par un expert certifié.
        </li>
        <li>
          <strong>Comparez les quartiers</strong> — les écarts de prix au mètre carré peuvent
          aller du simple au double entre deux quartiers de {city.name}. Prenez le temps
          d'analyser chaque secteur.
        </li>
        <li>
          <strong>Vérifiez les diagnostics obligatoires</strong> — DPE, amiante, termites
          (particulièrement important en climat tropical), plomb, loi Carrez pour les
          copropriétés.
        </li>
        <li>
          <strong>Anticipez les frais annexes</strong> — frais de notaire (environ 8% dans
          l'ancien), taxe foncière, charges de copropriété le cas échéant, coûts d'éventuels
          travaux de rénovation.
        </li>
        <li>
          <strong>Tenez compte du climat tropical</strong> — orientation du bien, exposition
          aux alizés, risques cycloniques, qualité de l'isolation sont des critères essentiels
          à La Réunion.
        </li>
      </ul>

      <h3>Pourquoi choisir Estimanou pour acheter à {city.name} ?</h3>
      <p>
        Estimanou est le spécialiste de l'estimation immobilière à La Réunion. Avec plus de{" "}
        <strong>{city.stats.estimationsCount} estimations réalisées</strong> à {city.name},
        nos experts connaissent chaque rue, chaque résidence, chaque quartier. Nous proposons :
      </p>
      <ul>
        <li>Des biens <strong>expertisés avec fourchette de prix</strong> transparente</li>
        <li>Un délai de vente moyen de seulement <strong>{city.stats.avgSaleTime}</strong></li>
        <li>Un accompagnement personnalisé de la visite à la signature</li>
        <li>
          Une{" "}
          <a href="/estimer">estimation gratuite de votre bien</a>{" "}
          si vous vendez pour acheter
        </li>
      </ul>

      <h3>Explorer les biens dans les villes voisines</h3>
      <p>
        Votre recherche ne se limite pas forcément à {city.name}. Les communes voisines de
        La Réunion offrent également d'excellentes opportunités. Découvrez les biens à vendre
        dans les autres villes :
      </p>
      <ul>
        {otherCities.map((c) => (
          <li key={c.slug}>
            <Link href={`/biens-a-vendre/${c.slug}`}>
              Biens à vendre à {c.name}
            </Link>{" "}
            — prix moyen {c.stats.avgPricePerSqm}/m², évolution {c.stats.priceEvolution}.
            Vous pouvez aussi{" "}
            <Link href={`/estimation-immobiliere/${c.slug}`}>
              découvrir l'estimation immobilière à {c.name}
            </Link>
            .
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ── Contenu SEO global (toutes les villes) ── */
const GlobalPropertySEO = () => {
  const allCities = getAllCities();

  return (
    <div className="prose-estimanou">
      <h2>
        Acheter un bien immobilier à La Réunion : le guide Estimanou
      </h2>

      <p>
        L'île de La Réunion offre un marché immobilier riche, varié et en pleine croissance.
        De la côte ouest ensoleillée de Saint-Gilles-les-Bains aux hauteurs verdoyantes du
        Tampon, en passant par le dynamisme urbain de Saint-Denis et le charme de Saint-Pierre,
        chaque commune possède ses atouts. Chez <strong>Estimanou</strong>, chaque bien mis en
        vente bénéficie d'une{" "}
        <a href="/estimer">estimation experte gratuite</a>{" "}
        réalisée par un professionnel local connaissant les réalités de chaque commune et de
        chaque quartier. Notre objectif : vous offrir une vision claire et transparente du
        marché pour vous aider à acheter en toute confiance.
      </p>

      <h3>Le marché immobilier réunionnais en chiffres</h3>
      <p>
        La Réunion compte environ 900 000 habitants répartis sur 24 communes. Le marché
        immobilier est soutenu par une croissance démographique constante, un fort besoin en
        logements neufs et une attractivité touristique qui alimente le segment des résidences
        secondaires et de l'investissement locatif. Les prix varient significativement d'une
        commune à l'autre :
      </p>
      <ul>
        {allCities.map((c) => (
          <li key={c.slug}>
            <strong>{c.name}</strong> : prix moyen de {c.stats.avgPricePerSqm}/m², évolution
            de {c.stats.priceEvolution} sur 12 mois, délai de vente moyen de{" "}
            {c.stats.avgSaleTime}.
          </li>
        ))}
      </ul>
      <p>
        Ces chiffres illustrent la diversité du marché réunionnais et l'importance de
        s'appuyer sur une estimation locale précise avant tout achat ou vente.
      </p>

      <h3>Les différents types de biens disponibles à La Réunion</h3>
      <p>
        Notre catalogue couvre l'ensemble des typologies immobilières présentes sur l'île.
        Voici les principales catégories de biens que vous pouvez trouver sur Estimanou :
      </p>
      <ol>
        <li>
          <strong>Appartements</strong> — du studio au T5, en centre-ville ou en résidence
          fermée. Idéaux pour les primo-accédants, les étudiants investisseurs ou les
          acquéreurs recherchant un pied-à-terre urbain. Prix typiques : de 80 000 € à
          350 000 €.
        </li>
        <li>
          <strong>Maisons individuelles</strong> — avec jardin, garage et parfois piscine.
          Les maisons représentent le segment le plus demandé à La Réunion, notamment par
          les familles. Prix typiques : de 150 000 € à 500 000 €.
        </li>
        <li>
          <strong>Villas haut de gamme</strong> — prestations premium, vue mer ou montagne,
          piscine, terrain arboré. Concentrées sur la côte ouest (Saint-Gilles, Saint-Leu)
          et les hauteurs résidentielles. Prix typiques : de 400 000 € à 800 000 € et plus.
        </li>
        <li>
          <strong>Terrains constructibles</strong> — pour les projets de construction sur
          mesure. La Réunion offre des parcelles variées, des terrains plats en bord de mer
          aux terrains en pente avec vue panoramique.
        </li>
        <li>
          <strong>Locaux commerciaux</strong> — bureaux, commerces de proximité, locaux
          d'activité. Le tissu économique réunionnais génère une demande constante en
          immobilier professionnel.
        </li>
      </ol>

      <h3>Comment fonctionne l'estimation Estimanou ?</h3>
      <p>
        Chaque bien affiché sur notre plateforme a été analysé par un expert immobilier local.
        Notre méthode d'estimation repose sur :
      </p>
      <ul>
        <li>
          <strong>L'analyse comparative de marché</strong> — nous étudions les transactions
          récentes dans le même quartier pour des biens similaires (surface, type, état,
          prestations).
        </li>
        <li>
          <strong>La connaissance terrain</strong> — nos experts connaissent les spécificités
          de chaque rue, chaque résidence, chaque lotissement. L'emplacement exact d'un bien
          peut faire varier son prix de 10 à 30%.
        </li>
        <li>
          <strong>Les tendances du marché local</strong> — nous intégrons les évolutions
          récentes (hausse ou baisse) pour proposer une estimation au plus juste du marché
          actuel.
        </li>
        <li>
          <strong>La fourchette de prix transparente</strong> — plutôt qu'un prix unique,
          nous affichons une fourchette réaliste (prix bas / prix haut) qui vous donne une
          vision honnête de la valeur du bien.
        </li>
      </ul>
      <p>
        Vous souhaitez faire estimer votre propre bien ?{" "}
        <a href="/estimer">
          Obtenez votre estimation gratuite en 2 minutes
        </a>
        .
      </p>

      <h3>Acheter par ville à La Réunion</h3>
      <p>
        Pour affiner votre recherche, explorez les biens disponibles dans chaque commune de
        La Réunion. Chaque page ville vous propose un catalogue filtré et des informations
        détaillées sur le marché local :
      </p>
      <ul>
        {allCities.map((c) => (
          <li key={c.slug}>
            <Link href={`/biens-a-vendre/${c.slug}`}>
              Biens à vendre à {c.name}
            </Link>{" "}
            — {c.stats.avgPricePerSqm}/m² en moyenne.{" "}
            <Link href={`/estimation-immobiliere/${c.slug}`}>
              Estimation immobilière à {c.name}
            </Link>
            .
          </li>
        ))}
      </ul>

      <h3>5 conseils pour réussir votre achat immobilier à La Réunion</h3>
      <ol>
        <li>
          <strong>Définissez votre budget total</strong> — incluez les frais de notaire
          (~8% dans l'ancien, ~3% dans le neuf), les éventuels travaux de rénovation et les
          taxes locales (taxe foncière, ordures ménagères).
        </li>
        <li>
          <strong>Visitez à différents moments de la journée</strong> — l'ensoleillement,
          le bruit, la circulation varient. En milieu tropical, l'orientation et l'exposition
          aux alizés sont cruciales pour le confort quotidien.
        </li>
        <li>
          <strong>Vérifiez les risques naturels</strong> — La Réunion est soumise aux risques
          cycloniques, sismiques et volcaniques. Consultez le Plan de Prévention des Risques
          (PPR) de la commune avant tout engagement.
        </li>
        <li>
          <strong>Comparez les estimations</strong> — un bien correctement estimé se vend plus
          vite et au juste prix. Méfiez-vous des annonces sans fourchette d'estimation
          professionnelle.
        </li>
        <li>
          <strong>Faites-vous accompagner</strong> — un expert local comme Estimanou vous fait
          gagner du temps et vous protège des mauvaises surprises. De l'estimation à la
          signature chez le notaire, nous sommes à vos côtés.
        </li>
      </ol>

      <h3>Vendez votre bien avec Estimanou</h3>
      <p>
        Vous êtes propriétaire et souhaitez vendre ? Estimanou vous propose une{" "}
        <a href="/estimer">
          estimation gratuite et sans engagement
        </a>{" "}
        de votre bien immobilier à La Réunion. Notre expertise locale et notre connaissance
        fine du marché vous garantissent une vente rapide au meilleur prix. Nos experts
        interviennent dans toutes les communes de l'île : Saint-Denis, Saint-Pierre,
        Saint-Paul, Le Tampon, Saint-Leu et Saint-Gilles-les-Bains.
      </p>
    </div>
  );
};

/** Bloc de texte SEO riche en bas de la liste des biens */
export const PropertyListSEOText = ({ city }: PropertyListSEOTextProps) => {
  return (
    <section className="relative bg-navy-100 w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="animate-fade-in-up max-w-3xl">
          {city ? <CityPropertySEO city={city} /> : <GlobalPropertySEO />}
        </div>
      </div>
    </section>
  );
};
