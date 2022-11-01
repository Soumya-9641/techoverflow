import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Nav from './Nav.js';

function MyApp({ Component, pageProps }) {
  return<>
   <Nav/>
  <Component {...pageProps} />
  </>
}

export default MyApp
