import  {useContext}  from "react";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import AuthContext from "./../context/authorisation.js";

export default function Home() {
  
 const { user, login, logout } = useContext(AuthContext);

  return (
 <div>
      <h1 className={styles.title}>Castle-logue</h1>
    <div className={styles.title}>
      <p> For those stumbling across this app, Authentication is not quite fully implemented yet. </p>
    </div>
    <div className={styles.loginbtncontainer}>

      <Button text={"LOGIN / SIGNUP"} onClick={login}></Button>
      <Button text={"LOGOUT"} onClick={logout}></Button>
    </div>
 </div>
  );
  
}
