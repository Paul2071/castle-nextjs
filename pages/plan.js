import React from "react";
import { useEffect, useState } from "react";

function Plan() {
  const [toVisitCastles, setToVisitCastles] = useState(null);
  const [ paginationNumber, setPaginationNumber] = useState(0)
  const [ haveVisitedCastle, setHaveVisitedCastle] = useState(0)

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
    console.log(haveVisitedCastle)
   }



   //add castle to visited page
   useEffect (()=> {
    async function AddToHaveVisitedPage() {
      const response = await fetch(`https://evening-ridge-18162.herokuapp.com/castles/${haveVisitedCastle}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visited: "yes", addtovisit: "no" })
        });
        const data = await response.json()
        console.log("hello from plan to vist page")
               
        
      }
      AddToHaveVisitedPage()
  }, [haveVisitedCastle])
   


  //get all of the castles that I plan to visit
  useEffect(() => {
    async function getCastlesPlanToVisit() {
      const response = await fetch(`https://evening-ridge-18162.herokuapp.com/castles/plan/all/p/?pg=${paginationNumber}`);
      const data = await response.json();
      console.log("useEffect fired");

      if (response.ok) {
        setToVisitCastles(data)
      }
    }

    getCastlesPlanToVisit();
  }, [paginationNumber]);


  

  

  return (
    <div>
      <h1>Castles I plan to visit</h1>
     <div> 
     {toVisitCastles && toVisitCastles.map((castle) => (

        <p key={castle._id}><button onClick={()=> setHaveVisitedCastle(castle._id)}> Have Visited </button>{castle.castle}</p>
        
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

export default Plan;

