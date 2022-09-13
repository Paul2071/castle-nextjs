import Layout from '../components/Layout'
import { AuthorisationContext } from '../context/authorisation';
import '../styles/globals.css'
import Button from './../components/Button';


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <AuthorisationContext >
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
    </AuthorisationContext>
    </div>
  )
}

export default MyApp
