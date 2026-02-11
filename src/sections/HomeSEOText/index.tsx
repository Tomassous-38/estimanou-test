import Link from "next/link";
import { getAllCities } from "@/data/cities";

export const HomeSEOText = () => {
  const cities = getAllCities();

  return (
    <section className="relative bg-navy-100 w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="animate-fade-in-up max-w-3xl prose-estimanou">

          <h2>
            Estimation immobilière gratuite à La Réunion
          </h2>

          <p>
            Estimanou est un service d'<strong>estimation immobilière à La Réunion</strong> créé
            par Valentin Bourassin, expert du marché réunionnais depuis plus de 10 ans. Que vous
            soyez propriétaire d'un appartement à Saint-Denis, d'une villa à Saint-Gilles-les-Bains
            ou d'un terrain constructible au Tampon, vous pouvez obtenir une{" "}
            <strong>estimation gratuite, personnalisée et argumentée</strong>, réalisée par un
            professionnel qui connaît chaque micro-marché de l'île.
          </p>

          <h3>Pourquoi faire estimer son bien immobilier à La Réunion ?</h3>
          <p>
            Connaître la <em>vraie valeur</em> de son bien est important dans de nombreuses
            situations : vente, donation, succession, divorce, renégociation de prêt ou
            déclaration IFI. À La Réunion, les prix varient fortement d'une commune à l'autre,
            de <strong>2 100 €/m²</strong> à Salazie jusqu'à plus de{" "}
            <strong>4 500 €/m²</strong> dans l'Ouest. S'appuyer uniquement sur une estimation
            automatique, c'est prendre le risque de{" "}
            <strong>passer à côté du vrai prix de votre bien</strong>. Chez Estimanou, chaque
            estimation repose sur une analyse croisée des transactions réelles (données DVF),
            des caractéristiques du bien et d'une connaissance fine du terrain.
          </p>

          <h3>Le marché immobilier réunionnais en 2025</h3>
          <p>
            Le prix médian au m² à La Réunion s'établit autour de{" "}
            <strong>2 880 €/m²</strong> en 2025, avec une légère baisse annuelle de -2 % mais
            une hausse de <strong>+30 % sur 5 ans</strong>. Le marché reste tendu : l'offre
            de biens disponibles est insuffisante face à une demande soutenue, surtout dans
            les zones littorales de l'Ouest. La <strong>pénurie de foncier constructible</strong>{" "}
            maintient une pression à la hausse sur les prix, en particulier à Saint-Paul
            (commune la plus chère de l'île), Saint-Gilles-les-Bains et Saint-Leu. Dans ce
            contexte, une estimation locale et actualisée est <em>indispensable</em> pour
            positionner un bien au juste prix.
          </p>

          <h3>Nos secteurs d'intervention pour l'estimation immobilière</h3>
          <p>
            Nos estimations couvrent les principales communes de La Réunion, avec une expertise
            renforcée sur l'Ouest :
          </p>
          <ul>
            {cities.map((city) => (
              <li key={city.slug}>
                <Link href={`/estimation-immobiliere/${city.slug}`}>
                  Estimation immobilière à {city.name}
                </Link>{" "}
                — prix moyen {city.stats.avgPricePerSqm}/m²,{" "}
                {city.stats.estimationsCount} estimations réalisées.{" "}
                <Link href={`/biens-a-vendre/${city.slug}`}>
                  Voir les biens à {city.name}
                </Link>
                .
              </li>
            ))}
          </ul>

          <h3>Comment fonctionne notre estimation immobilière ?</h3>
          <ol>
            <li>
              <strong>Décrivez votre bien en ligne</strong> — remplissez notre formulaire en
              moins de 2 minutes avec les caractéristiques de votre propriété.{" "}
              <a href="/estimer">Commencer mon estimation gratuite</a>.
            </li>
            <li>
              <strong>Analyse par un expert local</strong> — Valentin croise les données du
              marché, les transactions comparables et sa connaissance terrain pour évaluer
              votre bien avec précision.
            </li>
            <li>
              <strong>Recevez votre estimation sous 48h</strong> — une fourchette de prix
              détaillée et argumentée, utilisable auprès d'un notaire, d'une banque ou d'un
              acheteur. <em>100% gratuit, sans engagement.</em>
            </li>
          </ol>

          <h3>Tous les biens estimés à La Réunion</h3>
          <p>
            Consultez notre catalogue de{" "}
            <Link href="/biens-a-vendre">biens à vendre à La Réunion</Link>,
            tous accompagnés d'une <strong>fourchette d'estimation transparente</strong>.
            Appartements, maisons, villas, terrains et locaux commerciaux : filtrez par ville,
            type de bien et budget pour trouver la propriété qui vous correspond.
          </p>

          <h3>Questions fréquentes sur l'estimation immobilière à La Réunion</h3>
          <p>
            <strong>L'estimation Estimanou est-elle vraiment gratuite ?</strong> — Oui,
            complètement. Le service est <strong>entièrement gratuit et sans engagement</strong>.
            Que vous décidiez de vendre ou non, vous ne payez rien.
          </p>
          <p>
            <strong>Quelle est la différence avec une estimation en ligne automatique ?</strong> —
            Les estimations algorithmiques se basent sur des <em>moyennes statistiques</em>.
            Elles ne prennent pas en compte l'état réel du bien, la vue, l'environnement
            immédiat, les projets d'aménagement du quartier ou le potentiel de rénovation.
            Chaque estimation Estimanou est réalisée par un{" "}
            <strong>expert qui connaît le terrain</strong>. C'est la différence entre un chiffre
            approximatif et un prix que vous pouvez réellement défendre.
          </p>
          <p>
            <strong>Pourquoi est-ce important de bien estimer avant de vendre ?</strong> — À
            La Réunion, <strong>7 vendeurs sur 10</strong> doivent revoir leur prix à la baisse
            après mise en vente. Un bien surévalué reste sur le marché, perd en attractivité et
            finit souvent par se vendre <em>en dessous de sa vraie valeur</em>. Une estimation
            juste dès le départ, c'est plus de visites qualifiées, une négociation plus courte
            et un prix final optimisé.
          </p>
          <p>
            <strong>Estimanou intervient-il dans toute La Réunion ?</strong> — Oui. Notre
            expertise couvre l'ensemble de l'île, avec une spécialisation forte sur l'Ouest
            (Saint-Paul, Saint-Gilles, Saint-Leu, L'Étang-Salé). Pour une estimation dans
            d'autres communes, nous nous appuyons sur notre réseau et les données de marché
            les plus récentes.{" "}
            <a href="/estimer">Demandez votre estimation gratuite</a>.
          </p>

        </div>
      </div>
    </section>
  );
};
