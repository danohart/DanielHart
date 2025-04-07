import { OAuth2Client } from 'google-auth-library';
import { setCookie } from 'cookies-next';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/google/callback`;

export default async function handler(req, res) {
  const oAuth2Client = new OAuth2Client(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    REDIRECT_URI
  );

  try {
    // Exchange authorization code for tokens
    const { tokens } = await oAuth2Client.getToken(req.query.code);

    // Store the access token in a secure, HTTP-only cookie
    setCookie('google_access_token', tokens.access_token, {
      req,
      res,
      maxAge: tokens.expires_in,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    // If you received a refresh token, store it as well
    if (tokens.refresh_token) {
      setCookie('google_refresh_token', tokens.refresh_token, {
        req,
        res,
        maxAge: 30 * 24 * 60 * 60, // 30 days
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });
    }

    // Redirect back to the client
    res.redirect('/places');
  } catch (error) {
    console.error('Error getting tokens:', error);
    res.status(500).json({ error: 'Failed to authenticate with Google' });
  }
}
