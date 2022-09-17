import Layout from "../components/Layout";
import { AuthorisationContext } from "../context/authorisation";
import "../styles/globals.css";
import Button from "./../components/Button";

function MyApp({ Component, pageProps }) {
  return (
    <AuthorisationContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthorisationContext>
  );
}

export default MyApp;
