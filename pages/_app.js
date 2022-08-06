import Layout from '../components/Layout'
import '../styles/globals.css'
import Button from './../components/Button';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
 
    </Layout>
  )
}

export default MyApp
