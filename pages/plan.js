import React from "react";
import { useEffect, useState } from "react";
import BasicButtonGroup from "../components/MuiButton";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";

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

  function handleClick() {
    async function checkPostCode() {
      const response = await fetch(
        `https://remote.address44.com/v2/exapi/?access-key=1WN5WP19UUKN5SDRGJ_196_133_5VTO31CUO_AJMYDIQLMEGY66&postcode=LE52lu`,
        {
          method: "POST",
        }
      ).then(console.log(response));
    }
    checkPostCode().then(console.log("I fired"));
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
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
          <td hidden={loading}> Fetching Castles...</td>
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
      <div className={styles.btngroup}>
        <BasicButtonGroup
          texta={"PREVIOUS"}
          textb={"RESET"}
          textc={"NEXT"}
          textd={"TEXT"}
          onClicka={loadPreviousOnClick}
          onClickb={resetCastlesOnClick}
          onClickc={loadNextOnClick}
          onClickd={handleClick}
        />
      </div>
    </div>
  );
}

export default Plan;
