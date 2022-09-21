import  {useContext}  from "react";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import AuthContext from "./../context/authorisation.js";

export default function Home() {
  
 const { user, login, logout } = useContext(AuthContext);

  return (
    <div className={styles.inputbtncontainer}>
      <h1 className={styles.title}>Castle-logue</h1>

      <Button text={"LOGIN / SIGNUP"} onClick={login}></Button>
      <Button text={"LOGOUT"} onClick={logout}></Button>
    </div>
  );
}
