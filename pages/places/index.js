import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/places.module.scss';

import { granadaData } from '../../content/granada';
import { madridData } from '../../content/madrid';
import { mexicoCityData } from '../../content/mexico-city';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const cities = [
  {
    name: 'Granada',
    country: 'Spain',
    slug: 'granada',
    tagline: "Moorish history meets vibrant tapas culture in Andalusia's gem.",
    heroImage: '/images/places/granada/sacromonte.jpg',
    data: granadaData,
  },
  {
    name: 'Madrid',
    country: 'Spain',
    slug: 'madrid',
    tagline:
      "Spain's capital serves up world-class art, parks, and late-night energy.",
    heroImage: '/images/places/madrid/ardosa.jpg',
    data: madridData,
  },
  {
    name: 'Mexico City',
    country: 'Mexico',
    slug: 'mexico-city',
    tagline:
      'Endless tacos, mezcal, and a food scene that never stops surprising.',
    heroImage: '/images/places/mexico-city/roma.jpg',
    data: mexicoCityData,
  },
];

// Calculate counts for each city
const getCityCounts = (data) => {
  const foodDrinkCount = data.drinks_and_food?.length || 0;
  const sightseeingCount = data.sightseeing?.length || 0;
  return {
    foodDrinkCount,
    sightseeingCount,
    total: foodDrinkCount + sightseeingCount,
  };
};

export default function PlacesIndex() {
  return (
    <Layout>
      <SEO title="Travel Recommendations" />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>My Travel Recommendations</h1>

          <p className={styles.description}>
            A collection of my favorite places from cities I've explored, with
            personal recommendations for food, drinks, and sightseeing.
          </p>

          <div className={styles.citiesContainer}>
            {cities.map((city) => {
              const counts = getCityCounts(city.data);
              return (
                <Link
                  href={`/places/${city.slug}`}
                  key={city.slug}
                  className={styles.cityCardLink}
                >
                  <article className={styles.cityCard}>
                    <div className={styles.cityHeroContainer}>
                      <Image
                        src={city.heroImage}
                        alt={`${city.name}, ${city.country}`}
                        fill
                        className={styles.cityHeroImage}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                      <div className={styles.cityHeroOverlay} />
                    </div>
                    <div className={styles.cityInfo}>
                      <h2 className={styles.cityName}>
                        {city.name}, {city.country}
                      </h2>
                      <p className={styles.cityTagline}>{city.tagline}</p>
                      <div className={styles.cityStats}>
                        <span className={styles.cityStat}>
                          {counts.foodDrinkCount} Food & Drinks
                        </span>
                        <span className={styles.cityStatDivider}>·</span>
                        <span className={styles.cityStat}>
                          {counts.sightseeingCount} Sightseeing
                        </span>
                      </div>
                      <span className={styles.viewGuideLink}>View Guide →</span>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </Layout>
  );
}
