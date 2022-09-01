import React from "react";
import { useEffect, useState } from "react";

function Visited() {
  const [paginationNumber, setPaginationNumber] = useState(0);
  const [allVisitedCastles, setAllVisitedCastles] = useState();
  const [removeFromVisit, setRemoveFromVisit] = useState();

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
    console.log(removeFromVisit);
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
      );
    }

    RemoveCastleFromVistied();
  }, [removeFromVisit]);

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
      }
    }
    GetAllVisitedCastles();
  }, [paginationNumber]);

  return (
    <div>
      <h1>Castles I have visited</h1>
      {allVisitedCastles &&
        allVisitedCastles.map((castle) => (
          <p key={castle._id}>
            {castle.castle}
            <button onClick={() => setRemoveFromVisit(castle._id)}>X</button>
          </p>
        ))}

      <button onClick={loadPreviousOnClick}> PREVIOUS</button>
      <button onClick={resetCastlesOnClick}> RESET</button>
      <button onClick={loadNextOnClick}> NEXT</button>
      <button onClick={handleClick}> TEST</button>
    </div>
  );
}

export default Visited;
