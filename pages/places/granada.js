import { useState, useRef } from 'react';
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
  const [viewMode, setViewMode] = useState('list');
  const [copyFeedback, setCopyFeedback] = useState({
    visible: false,
    id: null,
  });

  // Ref for timeout to clear copy feedback
  const copyTimeoutRef = useRef(null);

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

  const copyPlaceInfo = (e, place) => {
    e.stopPropagation();

    // Create text to copy
    const textToCopy = `${place.name} ${
      place.location ? `, ${place.location.address}` : ''
    }
    `.trim();

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        // Clear any existing timeout
        if (copyTimeoutRef.current) {
          clearTimeout(copyTimeoutRef.current);
        }

        // Show feedback
        setCopyFeedback({ visible: true, id: place.id });

        // Hide feedback after 2 seconds
        copyTimeoutRef.current = setTimeout(() => {
          setCopyFeedback({ visible: false, id: null });
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <Layout>
      <SEO title="Granada, Spain Recommendations" />
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>My Granada Travel Guide</h1>

          <p className={styles.description}>
            A collection of my favorite places in Granada, Spain, with personal
            impressions and additional information.
          </p>

          <div className={styles.controls}>
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
            <div className={styles.viewToggle}>
              <button
                className={`${styles.viewButton} ${
                  viewMode === 'grid' && styles.activeView
                }`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                title="Grid view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button
                className={`${styles.viewButton} ${
                  viewMode === 'list' && styles.activeView
                }`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
                title="List view"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          <div className={`${styles.placesContainer} ${styles[viewMode]}`}>
            {filteredPlaces.map((place) => (
              <div
                key={place.id}
                className={`${styles.placeItem} ${styles[viewMode + 'Item']}`}
                // onClick={() => setSelectedPlace(place)}
              >
                <div
                  className={styles.imageContainer}
                  id={`image-container-${place.id}`}
                >
                  {place.imageUrl ? (
                    <Image
                      src={place.imageUrl}
                      alt={place.name}
                      width={300}
                      height={200}
                      className={styles.placeImage}
                      onError={() => {
                        const container = document.getElementById(
                          `image-container-${place.id}`
                        );
                        if (container) {
                          container.innerHTML = `<div class="${styles.placeholderImage}"><div class="${styles.placeName}">${place.name}</div></div>`;
                        }
                      }}
                    />
                  ) : (
                    <div className={styles.placeholderImage}>
                      <div className={styles.placeName}>{place.name}</div>
                    </div>
                  )}
                </div>
                {place.featured && (
                  <div className={`${styles.featuredFlag}`}>
                    <span>Featured</span>
                  </div>
                )}
                <div className={styles.placeContent}>
                  <div className={styles.titleContainer}>
                    <h2
                      className={styles.placeTitle}
                      onClick={(e) => copyPlaceInfo(e, place)}
                      title="Click to copy place details"
                    >
                      {place.name}
                      <span className={styles.copyIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
                        </svg>
                      </span>

                      {/* Copy feedback tooltip */}
                      {copyFeedback.visible && copyFeedback.id === place.id && (
                        <span className={styles.copyFeedback}>Copied!</span>
                      )}
                    </h2>
                    <div className={styles.categoryTag}>{place.category}</div>
                  </div>
                  {/* Only show description in list view or if in grid view but no image */}
                  {(viewMode === 'list' || !place.imageUrl) && (
                    <p className={styles.placeDescription}>
                      {place.myDescription}
                    </p>
                  )}

                  {/* Show location in list view */}
                  {viewMode === 'list' && place.location && (
                    <div className={styles.placeLocation}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=
                            ${place.location.address + ', ' + place.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {place.location.address}
                        </a>
                      </span>
                    </div>
                  )}
                </div>
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
                      width={600}
                      height={400}
                      className={styles.modalImage}
                    />
                  ) : (
                    <div className={styles.placeholderImageLarge}>
                      <div className={styles.placeNameLarge}>
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
                    <p>
                      <a
                        href={
                          `https://www.google.com/maps/place/` +
                          encodeURIComponent(selectedPlace.location.address)
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selectedPlace.location.address}
                      </a>
                    </p>
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
