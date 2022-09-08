import React from "react";
import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import styles from "../styles/Home.module.css";


function AllCastles() {
  const [allCastles, setAllCastles] = useState(null);
  const [paginationNumber, setPaginationNumber] = useState(0);
  const [addingCastleToVisit, setAddingCastleToVisit] = useState("test");
  const [loading, setLoading] = useState(false)

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
    console.log(addingCastleToVisit);
  }

  //add a castle to plan to visit page
  useEffect(() => {
    async function AddCastleToVisitPage() {
      const response = await fetch(
        `https://evening-ridge-18162.herokuapp.com/castles/${addingCastleToVisit}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ addtovisit: "yes" }),
        }
      );
      const data = await response.json();
      console.log("hello there");
      console.log(addingCastleToVisit);
    }
    AddCastleToVisitPage();
  }, [addingCastleToVisit]);

  //get all castles in the db
  useEffect(() => {
    async function getAllCastlesEngland() {
      const response = await fetch(
        `https://evening-ridge-18162.herokuapp.com/castles/p/?pg=${paginationNumber}`
      );
      const data = await response.json();
      console.log("useEffect fired");

      if (response.ok) {
        setAllCastles(data);
        setLoading(true)
      }
    }

    getAllCastlesEngland();
  }, [paginationNumber]);

  return (
    <div>
      <PageTitle text="All castles in England" title="All Castles"/>

      <table>
        <thead>
          <tr>
            <th >Name</th>
            <th>Location</th>
            <th>Type</th>
            <th>Condition </th>
            <th>Plan to visit </th>
          </tr>
        </thead>
        <p hidden={loading}> Fetching Castles...</p>
        {allCastles &&
          allCastles.map((castle) => (
            <tr  key={castle._id}>
              <td>{castle.castle}</td>
              <td>{castle.location}</td>
              <td>{castle.type}</td>
              <td>{castle.condition}</td>
              <td>               
                <button onClick={() => setAddingCastleToVisit(castle._id)}>
                 +
                </button>
              </td>
            </tr>
          ))}
      </table>
        <div> 
          <button onClick={loadPreviousOnClick}> PREVIOUS</button>
          <button onClick={resetCastlesOnClick}> RESET</button>
          <button onClick={loadNextOnClick}> NEXT</button>
          <button onClick={handleClick}> TEST</button>
        </div>  
    </div>
  );
}

export default AllCastles;
