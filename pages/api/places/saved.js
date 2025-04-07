import { getCookie } from 'cookies-next';
import { OAuth2Client } from 'google-auth-library';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the access token from the cookie
  const accessToken = getCookie('google_access_token', { req, res });

  if (!accessToken) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  try {
    // Make the API call to get saved places
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/savedplaces/json?key=${GOOGLE_API_KEY}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      // If the token is expired, try to refresh it
      if (response.status === 401) {
        const refreshToken = getCookie('google_refresh_token', { req, res });

        if (refreshToken) {
          const newToken = await refreshAccessToken(refreshToken);
          if (newToken) {
            // Try the request again with the new token
            return res.redirect(307, req.url);
          }
        }

        return res
          .status(401)
          .json({ error: 'Session expired. Please log in again.' });
      }

      throw new Error(`Google API error: ${response.statusText}`);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching saved places:', error);
    return res.status(500).json({ error: 'Failed to fetch saved places' });
  }
}

async function refreshAccessToken(refreshToken) {
  try {
    const oAuth2Client = new OAuth2Client(
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET
    );

    oAuth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    const { credentials } = await oAuth2Client.refreshAccessToken();

    if (credentials.access_token) {
      setCookie('google_access_token', credentials.access_token, {
        req,
        res,
        maxAge: credentials.expires_in,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });

      return credentials.access_token;
    }
  } catch (error) {
    console.error('Failed to refresh token:', error);
  }

  return null;
}
