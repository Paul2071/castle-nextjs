import {  useEffect, useState } from "react";
import { createContext } from "react";
import netlifyIdentify from "netlify-identity-widget";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthorisationContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    netlifyIdentify.on("login", (user) => {
      setUser(user);
      netlifyIdentify.close();
      console.log("login event fired");
      console.log(user);
    });

    netlifyIdentify.on("logout", () => {
      setUser(null);
      console.log("user logged out");
    });

    netlifyIdentify.on('init', (user)=> {
      setUser(user)
      setAuthReady(true)
      console.log('init event')
    })

    //auth connection

    netlifyIdentify.init();
    return () => {
      netlifyIdentify.off("login");
      netlifyIdentify.off("logout");
    };
  }, []);

  const login = () => {
    netlifyIdentify.open();
  };

  const logout = () => {
    netlifyIdentify.logout();
  };

  const context = { user, login, logout, authReady };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
