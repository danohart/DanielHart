import '../styles/globals.css';
import '../styles/bootstrap.min.css';
import '../styles/layout.scss';
import '../styles/card.scss';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
