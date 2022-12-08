import  {useContext}  from "react";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import AuthContext from "./../context/authorisation.js";

export default function Home() {
  
 const { user, login, logout, authReady } = useContext(AuthContext);

  return (
 <div>
      <h1 className={styles.title}>Castle-logue</h1>
    <div className={styles.title}>
      <p> For those stumbling across this app, Authentication is not quite fully implemented yet. </p>
    </div>

   {authReady && ( 
    <div className={styles.loginbtncontainer}>
      {!user && <Button text={"LOGIN"} onClick={login}></Button>}
      {user && <p>Logged in as {user.email} </p> }
      {user && <Button text={"LOGOUT"} onClick={logout}></Button>}
    </div>)}

 </div>
  );
  
}
