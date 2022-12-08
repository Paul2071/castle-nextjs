import React from "react";
import { useEffect, useState, useContext } from "react";
import Button from "../components/Button";
//import BasicButtonGroup from "../components/MuiButton";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";
import AuthContext from "../context/authorisation";

function Plan() {
  const [toVisitCastles, setToVisitCastles] = useState(null);
  const [paginationNumber, setPaginationNumber] = useState(0);
  const [haveVisitedCastle, setHaveVisitedCastle] = useState(0);
  const [loading, setLoading] = useState(false);

  function loadNextOnClick() {
    setPaginationNumber(paginationNumber + 1);
  }
  function loadPreviousOnClick() {
    setPaginationNumber(paginationNumber - 1);
  }
  function resetCastlesOnClick() {
    setPaginationNumber(0);
  }

  //add castle to visited page
  useEffect(() => {
    async function AddToHaveVisitedPage() {
      const response = await fetch(
        `https://evening-ridge-18162.herokuapp.com/castles/${haveVisitedCastle}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visited: "yes", addtovisit: "no" }),
        }
      ).then(() => {
        async function getCastlesPlanToVisit() {
          const response = await fetch(
            `https://evening-ridge-18162.herokuapp.com/castles/plan/all/p/?pg=${paginationNumber}`
          );
          const data = await response.json();
          console.log("useEffect fired");

          if (response.ok) {
            setToVisitCastles(data);
          }
        }

        getCastlesPlanToVisit();
      });
    }
    AddToHaveVisitedPage();
  }, [haveVisitedCastle, paginationNumber]);

  //get all of the castles that I plan to visit
  useEffect(() => {
    async function getCastlesPlanToVisit() {
      const response = await fetch(
        `https://evening-ridge-18162.herokuapp.com/castles/plan/all/p/?pg=${paginationNumber}`
      );
      const data = await response.json();
      console.log("useEffect fired");

      if (response.ok) {
        setToVisitCastles(data);
        setLoading(true);
      }
    }

    getCastlesPlanToVisit();
  }, [paginationNumber]);

  //fetch to the netlify function endpoint that will fire whatever the testfunction netlify function is

  const { user, authReady } = useContext(AuthContext);

  useEffect(() => {
    if (authReady) {
      fetch("/.netlify/functions/bearertoken", user && {
        headers: {
          Authorization: "Bearer " + user.token.access_token
        }
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user, authReady ]);

  return (
    <div className={styles.maincontainer}>
      <PageTitle text="Castles I plan to visit" title="Plan to visit" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Condition </th>
            <th>Have visited </th>
          </tr>
          {/* <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td> */}
        </thead>

        {toVisitCastles &&
          toVisitCastles.map((castle) => (
            
            <tr key={castle._id}>
              <td>{castle.castle}</td>
              <td>{castle.location}</td>
              <td>{castle.type}</td>
              <td>{castle.condition}</td>
              <td>
                <button onClick={() => setHaveVisitedCastle(castle._id)}>
                  {" "}
                  +{" "}
                </button>
              </td>
            </tr>
          ))}
      </table>
      <div className={styles.btncontainer}>
        <Button text={"PREVIOUS"} onClick={loadPreviousOnClick}></Button>
        <Button text={"RESET"} onClick={resetCastlesOnClick}></Button>
        <Button text={"NEXT"} onClick={loadNextOnClick}></Button>
      </div>
      <div className={styles.btngroup}>
        {/* <BasicButtonGroup
          texta={"PREVIOUS"}
          textb={"RESET"}
          textc={"NEXT"}
          textd={"TEXT"}
          onClicka={loadPreviousOnClick}
          onClickb={resetCastlesOnClick}
          onClickc={loadNextOnClick}
          onClickd={handleClick}
        /> */}
      </div>
    </div>
  );
}

export default Plan;
