import { Link } from "react-router-dom";
import type { CityLanding } from "@/types/city";
import { getAllCities } from "@/data/cities";

interface CityLandingSEOTextProps {
  city: CityLanding;
}

/**
 * Bloc de texte SEO long en bas de la page landing ville.
 * Contient H2/H3 + maillage interne vers les biens à vendre et les villes voisines.
 */
export const CityLandingSEOText = ({ city }: CityLandingSEOTextProps) => {
  const allCities = getAllCities();
  const otherCities = allCities.filter((c) => c.slug !== city.slug);

  return (
    <section className="relative bg-navy-100 w-full">
      <div className="max-w-[1080px] mx-auto px-5 py-16 md:px-8 md:py-24">
        <div className="animate-fade-in-up max-w-3xl prose-estimanou">

          <h2>
            Estimation immobilière à {city.name} : tout ce que vous devez savoir
          </h2>

          <p>
            Vous envisagez de vendre ou d'acheter un bien immobilier à {city.name} ? Une
            estimation professionnelle est la première étape incontournable de votre projet.
            Chez <strong>Estimanou</strong>, nous mettons à votre disposition une expertise
            locale approfondie pour vous fournir une fourchette de prix réaliste, basée sur
            les transactions récentes et les caractéristiques précises de votre bien. Avec
            plus de <strong>{city.stats.estimationsCount} estimations réalisées</strong> à{" "}
            {city.name}, nos experts connaissent chaque quartier, chaque type de bien et
            chaque tendance du marché local.
          </p>

          <h3>Le marché immobilier à {city.name} en détail</h3>
          <p>
            Le marché immobilier de {city.name} se caractérise par un prix moyen de{" "}
            <strong>{city.stats.avgPricePerSqm}/m²</strong>, avec une évolution de{" "}
            <strong>{city.stats.priceEvolution}</strong> sur les 12 derniers mois. Le délai
            de vente moyen est de <strong>{city.stats.avgSaleTime}</strong>, ce qui témoigne
            d'un marché dynamique où les biens correctement estimés trouvent rapidement
            preneurs. Toutefois, les prix varient considérablement d'un quartier à l'autre,
            rendant l'estimation locale d'autant plus essentielle.
          </p>

          <h3>Prix au m² par quartier à {city.name}</h3>
          <p>
            Chaque quartier de {city.name} possède sa propre dynamique de marché. Voici un
            panorama détaillé des prix et des caractéristiques des principaux secteurs :
          </p>
          <ul>
            {city.neighborhoods.map((n) => (
              <li key={n.name}>
                <strong>{n.name}</strong> — {n.avgPricePerSqm}/m² en moyenne. {n.description}
              </li>
            ))}
          </ul>
          <p>
            Ces disparités de prix soulignent l'importance d'une estimation locale précise
            plutôt qu'une simple moyenne communale. Nos experts ajustent chaque estimation
            en fonction du quartier exact, de l'étage, de la vue, de l'état du bien et des
            transactions récentes dans le voisinage immédiat.
          </p>

          <h3>Comment se déroule une estimation Estimanou à {city.name} ?</h3>
          <p>
            Notre processus d'estimation est conçu pour être simple, rapide et transparent :
          </p>
          <ol>
            <li>
              <strong>Décrivez votre bien en ligne</strong> — remplissez notre formulaire
              en 2 minutes avec les caractéristiques de votre propriété (surface, nombre de
              pièces, quartier, état général). Vous pouvez{" "}
              <a href="/estimer">commencer votre estimation gratuite ici</a>.
            </li>
            <li>
              <strong>Analyse par un expert local</strong> — un de nos professionnels
              spécialisés sur {city.name} analyse votre bien en croisant les données de
              marché, les transactions comparables et sa connaissance terrain.
            </li>
            <li>
              <strong>Recevez votre estimation sous 48h</strong> — vous recevez une
              fourchette de prix détaillée avec les éléments de comparaison utilisés.
              L'estimation est gratuite et sans engagement.
            </li>
          </ol>

          <h3>Pourquoi faire estimer son bien à {city.name} ?</h3>
          <p>
            Une estimation professionnelle est cruciale, que vous vendiez ou que vous
            achetiez. Voici les principaux avantages :
          </p>
          <ul>
            <li>
              <strong>Vendre au juste prix</strong> — un bien surévalué reste longtemps sur
              le marché et perd en attractivité. Un bien sous-évalué vous fait perdre de
              l'argent. L'estimation Estimanou vous positionne au prix du marché.
            </li>
            <li>
              <strong>Accélérer la vente</strong> — à {city.name}, les biens correctement
              estimés se vendent en moyenne en {city.stats.avgSaleTime}. Les biens
              surévalués mettent souvent 2 à 3 fois plus de temps.
            </li>
            <li>
              <strong>Sécuriser votre achat</strong> — en tant qu'acheteur, vérifier que le
              prix demandé correspond à la valeur réelle du bien est une protection
              essentielle.
            </li>
            <li>
              <strong>Préparer votre financement</strong> — les banques et organismes de
              crédit s'appuient sur la valeur estimée du bien pour accorder un prêt
              immobilier. Une estimation fiable facilite vos démarches.
            </li>
          </ul>

          <h3>Les biens à vendre à {city.name}</h3>
          <p>
            Vous cherchez à acheter à {city.name} ? Consultez notre catalogue de biens
            expertisés, tous accompagnés d'une fourchette d'estimation transparente :
          </p>
          <ul>
            <li>
              <Link to={`/biens-a-vendre/${city.slug}`}>
                Tous les biens à vendre à {city.name}
              </Link>{" "}
              — appartements, maisons, villas, terrains et locaux commerciaux estimés par
              nos experts.
            </li>
            <li>
              <Link to="/biens-a-vendre">
                Voir tous les biens à vendre à La Réunion
              </Link>{" "}
              — explorez l'ensemble de notre catalogue avec filtres par ville, type et budget.
            </li>
          </ul>

          <h3>Estimation immobilière dans les villes voisines</h3>
          <p>
            Nos experts interviennent dans toutes les principales communes de La Réunion.
            Découvrez nos services d'estimation dans les villes proches de {city.name} :
          </p>
          <ul>
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link to={`/estimation-immobiliere/${c.slug}`}>
                  Estimation immobilière à {c.name}
                </Link>{" "}
                — prix moyen {c.stats.avgPricePerSqm}/m², {c.stats.estimationsCount}{" "}
                estimations réalisées.{" "}
                <Link to={`/biens-a-vendre/${c.slug}`}>
                  Voir les biens à {c.name}
                </Link>
                .
              </li>
            ))}
          </ul>

          <h3>Questions fréquentes sur l'estimation à {city.name}</h3>
          <p>
            <strong>Combien coûte une estimation Estimanou ?</strong> — Notre service
            d'estimation est entièrement gratuit et sans engagement. Vous ne payez rien,
            que vous décidiez de vendre avec nous ou non.
          </p>
          <p>
            <strong>Quelle est la différence entre estimation et expertise ?</strong> —
            L'estimation fournit une fourchette de prix indicative basée sur le marché
            local. L'expertise immobilière, réalisée par un expert certifié, produit un
            document juridiquement opposable (utile en cas de succession, donation ou
            litige).
          </p>
          <p>
            <strong>En combien de temps puis-je vendre à {city.name} ?</strong> — Avec
            une estimation au prix du marché, le délai moyen constaté est de{" "}
            {city.stats.avgSaleTime}. Ce délai dépend toutefois du type de bien, du
            quartier et de la saison.
          </p>
          <p>
            <strong>Estimanou intervient-il dans toute La Réunion ?</strong> — Oui, nos
            experts couvrent l'ensemble de l'île : Saint-Denis, Saint-Pierre, Saint-Paul,
            Le Tampon, Saint-Leu et Saint-Gilles-les-Bains.{" "}
            <a href="/estimer">Demandez votre estimation gratuite</a>.
          </p>

        </div>
      </div>
    </section>
  );
};
