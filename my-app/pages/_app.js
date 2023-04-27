import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/bullets.css";
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
