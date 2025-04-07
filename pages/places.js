// pages/saved-places.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function SavedPlaces() {
  const [places, setPlaces] = useState([
    {
      type: 'FeatureCollection',
      features: [
        {
          geometry: {
            coordinates: [-99.1662849, 19.4301685],
            type: 'Point',
          },
          properties: {
            date: '2023-12-20T02:07:37Z',
            google_maps_url: 'http://maps.google.com/?cid=16443030945984327956',
            location: {
              address:
                'C. Río Sena 69, Cuauhtémoc, 06500 Ciudad de México, CDMX, Mexico',
              country_code: 'MX',
              name: 'Hotel Casa Gonzalez',
            },
          },
          type: 'Feature',
        },
        {
          geometry: {
            coordinates: [0, 0],
            type: 'Point',
          },
          properties: {
            date: '2020-03-10T03:09:01Z',
            google_maps_url:
              'http://maps.google.com/?q=80067+Sorrento,+Metropolitan+City+of+Naples,+Italy&ftid=0x133b99536dbf5b61:0x2644eb57abc0ce40',
            Comment:
              'No location information is available for this saved place',
          },
          type: 'Feature',
        },
        {
          geometry: {
            coordinates: [0, 0],
            type: 'Point',
          },
          properties: {
            date: '2015-02-28T20:31:33Z',
            google_maps_url:
              'http://maps.google.com/?q=41.96867553178211,-87.65807412564754',
            Comment:
              'No location information is available for this saved place',
          },
          type: 'Feature',
        },
      ],
    },
  ]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchSavedPlaces = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/places/saved');

      if (!response.ok) {
        if (response.status === 401) {
          setIsLoggedIn(false);
          throw new Error('Your session has expired. Please log in again.');
        }
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setPlaces(data.results || []);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching saved places:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleLogin = () => {
    window.location.href = '/api/auth/google';
  };

  return (
    <div>
      <Head>
        <title>My Saved Places</title>
        <meta name="description" content="View your saved Google Maps places" />
      </Head>

      <main>
        <h1>My Saved Places</h1>

        {places.length === 0 ? (
          <p>No saved places found.</p>
        ) : (
          <ul>
            {places.map((place) => (
              <li key={place.place_id}>
                <h2>{place.name}</h2>
                <p>{place.formatted_address}</p>
                <a
                  href={`https://www.google.com/maps/place/?q=place_id:${place.place_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Maps
                </a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
