import React from 'react'
import { useEffect, useState } from "react";




function Visited() {


  const [ paginationNumber, setPaginationNumber] = useState(0)
  const [ allVisitedCastles, setAllVisitedCastles] = useState()


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
    
   }

  useEffect(() => {
    async function GetAllVisitedCastles() {
      const response = await fetch(`http://localhost:3000/castles/visit/all/p/?pg=${paginationNumber}`);
      const data = await response.json();
      console.log("useEffect fired");
  
      if (response.ok) {
        setAllVisitedCastles(data)
      }
    }
    GetAllVisitedCastles();
}, [paginationNumber]);
  return (
    <div>
    <h1>Castles I have visited</h1>
    {allVisitedCastles && allVisitedCastles.map((castle) => (

<p key={castle._id}><button onClick={()=> allVisitedCastles(castle._id)}> Plan to Visit </button>{castle.castle}</p>

))
}

<button onClick={loadPreviousOnClick}> PREVIOUS</button>
<button onClick={resetCastlesOnClick}> RESET</button>
<button onClick={loadNextOnClick}> NEXT</button>
<button onClick={handleClick}> TEST</button>
</div>
    
  )
}

export default Visited