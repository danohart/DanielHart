import { getCookie } from 'cookies-next';

export default function handler(req, res) {
  const accessToken = getCookie('google_access_token', { req, res });

  res.status(200).json({ isLoggedIn: !!accessToken });
}
