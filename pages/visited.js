import React from "react";
import { useEffect, useState } from "react";
import Button from "../components/Button";
//import BasicButtonGroup from "../components/MuiButton";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";

function Visited() {
  const [paginationNumber, setPaginationNumber] = useState(0);
  const [allVisitedCastles, setAllVisitedCastles] = useState();
  const [removeFromVisit, setRemoveFromVisit] = useState();
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

  function handleClick() {
    console.log(user);
  }

  useEffect(() => {
    async function RemoveCastleFromVistied() {
      const response = await fetch(
        `https://evening-ridge-18162.herokuapp.com/castles/${removeFromVisit}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visited: "no" }),
        }
      ).then(() => {
        async function GetAllVisitedCastles() {
          const response = await fetch(
            `https://evening-ridge-18162.herokuapp.com/castles/visit/all/p/?pg=${paginationNumber}`
          );
          const data = await response.json();
          console.log("useEffect fired");

          if (response.ok) {
            setAllVisitedCastles(data);
          }
        }
        GetAllVisitedCastles();
      }, [paginationNumber]);
    }

    RemoveCastleFromVistied();
  }, [removeFromVisit, paginationNumber]);

  //get all castles that have the key value pair of visited: "yes"
  useEffect(() => {
    async function GetAllVisitedCastles() {
      const response = await fetch(
        `https://evening-ridge-18162.herokuapp.com/castles/visit/all/p/?pg=${paginationNumber}`
      );
      const data = await response.json();
      console.log("useEffect fired");

      if (response.ok) {
        setAllVisitedCastles(data);
        setLoading(true);
      }
    }
    GetAllVisitedCastles();
  }, [paginationNumber]);

  return (
    <div className={styles.maincontainer}>
      <PageTitle text="Castles I have visited" title="Castles Visited" />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Condition </th>
            <th>Remove from list </th>
          </tr>
          {/* <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td> */}
        </thead>
        
        {allVisitedCastles &&
          allVisitedCastles.map((castle) => (
            <tr key={castle._id}>
              <td>{castle.castle}</td>
              <td>{castle.location}</td>
              <td>{castle.type}</td>
              <td>{castle.condition}</td>
              <td>
                <button onClick={() => setRemoveFromVisit(castle._id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
      </table>
      <div className={styles.btncontainer}>
            <Button text={"PREVIOUS"} onClick={loadPreviousOnClick} ></Button>
            <Button text={"RESET"} onClick={resetCastlesOnClick} ></Button>
            <Button text={"NEXT"} onClick={loadNextOnClick} ></Button>
        </div> 
      <div>
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

export default Visited;
