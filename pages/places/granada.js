// pages/index.js or app/page.js (depending on your Next.js version)

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/places.module.scss';

import { granadaData } from '../../content/granada';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

export default function GranadaGuide() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showGenerated, setShowGenerated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  const allPlaces = [
    ...granadaData.drinks_and_food.map((place) => ({
      ...place,
      categoryType: 'food',
    })),
    ...granadaData.sightseeing.map((place) => ({
      ...place,
      categoryType: 'sightseeing',
    })),
  ];

  // Filter places based on active category
  const filteredPlaces =
    activeCategory === 'all'
      ? allPlaces
      : allPlaces.filter((place) => place.categoryType === activeCategory);

  return (
    <Layout>
      <SEO title="Granada, Spain Recommendations" />
      <div className={styles.container}>
        <Head>
          <title>My Granada Travel Guide</title>
          <meta
            name="description"
            content="Personal guide to the best places in Granada, Spain"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>My Granada Travel Guide</h1>

          <p className={styles.description}>
            A collection of my favorite places in Granada, Spain, with personal
            impressions and additional information.
          </p>

          <div className={styles.categoryTabs}>
            <button
              className={`${styles.categoryTab} ${
                activeCategory === 'all' && styles.activeTab
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All Places
            </button>
            <button
              className={`${styles.categoryTab} ${
                activeCategory === 'food' && styles.activeTab
              }`}
              onClick={() => setActiveCategory('food')}
            >
              Food & Drinks
            </button>
            <button
              className={`${styles.categoryTab} ${
                activeCategory === 'sightseeing' && styles.activeTab
              }`}
              onClick={() => setActiveCategory('sightseeing')}
            >
              Sightseeing
            </button>
          </div>

          <div className={styles.grid}>
            {filteredPlaces.map((place) => (
              <div
                key={place.id}
                className={styles.card}
                onClick={() => setSelectedPlace(place)}
              >
                <div className={styles.imageContainer}>
                  {/* If imageUrl exists, try to display the image */}
                  {place.imageUrl ? (
                    <Image
                      src={place.imageUrl}
                      alt={place.name}
                      width={300}
                      height={200}
                      className={styles.placeImage}
                      onError={() => {
                        // If image fails to load, we'll show the placeholder instead
                        const container = document.getElementById(
                          `image-container-${place.id}`
                        );
                        if (container) {
                          container.innerHTML = `<div class="${styles.placeholderImage}"><div class="${styles.placeName}">${place.name}</div></div>`;
                        }
                      }}
                    />
                  ) : (
                    // If no imageUrl, show placeholder with name
                    <div className={styles.placeholderImage}>
                      <div className={styles.placeName}>{place.name}</div>
                    </div>
                  )}
                </div>
                <h2>{place.name}</h2>
                <div className={styles.categoryTag}>{place.category}</div>
                <p className={styles.description}>{place.myDescription}</p>
              </div>
            ))}
          </div>

          {selectedPlace && (
            <div
              className={styles.modal}
              onClick={(e) => {
                if (e.target.className === styles.modal) {
                  setSelectedPlace(null);
                }
              }}
            >
              <div className={styles.modalContent}>
                <button
                  className={styles.closeButton}
                  onClick={() => setSelectedPlace(null)}
                >
                  ×
                </button>

                <h2>{selectedPlace.name}</h2>
                <div className={styles.categoryTag}>
                  {selectedPlace.category}
                </div>

                <div className={styles.largeImageContainer}>
                  {selectedPlace.imageUrl ? (
                    <Image
                      src={selectedPlace.imageUrl}
                      alt={selectedPlace.name}
                      width={300}
                      height={200}
                      className={styles.placeImage}
                      onError={() => {
                        // If image fails to load, we'll show the placeholder instead
                        const container = document.getElementById(
                          `image-container-${place.id}`
                        );
                        if (container) {
                          container.innerHTML = `<div class="${styles.placeholderImage}"><div class="${styles.placeName}">${place.name}</div></div>`;
                        }
                      }}
                    />
                  ) : (
                    // If no imageUrl, show placeholder with name
                    <div className={styles.placeholderImage}>
                      <div className={styles.placeName}>
                        {selectedPlace.name}
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.descriptionTabs}>
                  <button
                    className={`${styles.tab} ${
                      !showGenerated && styles.activeTab
                    }`}
                    onClick={() => setShowGenerated(false)}
                  >
                    My Experience
                  </button>
                  <button
                    className={`${styles.tab} ${
                      showGenerated && styles.activeTab
                    }`}
                    onClick={() => setShowGenerated(true)}
                  >
                    About This Place
                  </button>
                </div>

                <div className={styles.descriptionContent}>
                  {showGenerated ? (
                    <p>{selectedPlace.generatedDescription}</p>
                  ) : (
                    <p>{selectedPlace.myDescription}</p>
                  )}
                </div>

                {selectedPlace.location && (
                  <div className={styles.locationInfo}>
                    <h3>Location</h3>
                    <p>{selectedPlace.location.address}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}
