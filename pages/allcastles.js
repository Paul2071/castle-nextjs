import React from "react";
import { useEffect, useState } from "react";


function AllCastles() {
  const [ allCastles, setAllCastles ] = useState(null);
  const [ paginationNumber, setPaginationNumber ] = useState(0)
  const [ addingCastleToVisit, setAddingCastleToVisit ] = useState("test")

  function loadNextOnClick() {
    setPaginationNumber(paginationNumber + 1)
  }
  function loadPreviousOnClick() {
    setPaginationNumber(paginationNumber - 1)
  }
  function resetCastlesOnClick() {
    setPaginationNumber(0)
  }

  function handleClick () {
    console.log(addingCastleToVisit)
  }

//add a castle to plan to visit page
useEffect (()=> {
  async function AddCastleToVisitPage() {
    const response = await fetch(`https://evening-ridge-18162.herokuapp.com/castles/${addingCastleToVisit}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addtovisit: "yes" })
      });
      const data = await response.json()
      console.log("hello there")
      console.log(addingCastleToVisit)
      
      
    }
    AddCastleToVisitPage()
}, [addingCastleToVisit])





   
  

  //get all castles in the db
  useEffect(() => {
    async function getAllCastlesEngland() {
      const response = await fetch(`https://evening-ridge-18162.herokuapp.com/castles/p/?pg=${paginationNumber}`);
      const data = await response.json();
      console.log("useEffect fired");

      if (response.ok) {
        setAllCastles(data)
      }
    }

    getAllCastlesEngland();
  }, [paginationNumber]);

  

  return (
    <div>
      <h1>All castles in England</h1>
     <div> 
     {allCastles && allCastles.map((castle) => (

        <p key={castle._id}><button onClick={()=> setAddingCastleToVisit(castle._id)}> Plan to Visit </button>{castle.castle}</p>
        
     ))
      }
    
      <button onClick={loadPreviousOnClick}> PREVIOUS</button>
      <button onClick={resetCastlesOnClick}> RESET</button>
      <button onClick={loadNextOnClick}> NEXT</button>
      <button onClick={handleClick}> TEST</button>
      </div>
     
    </div>
  );
}

export default AllCastles;
