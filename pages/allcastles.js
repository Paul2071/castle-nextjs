import React from "react";
import { useEffect, useState } from "react";

function AllCastles() {
  const [allCastles, setAllCastles] = useState(null);
  const [ paginationNumber, setPaginationNumber] = useState(0)

  function handleClick() {
    console.log(allCastles)
    console.log(allCastles[0]._id);
    console.log(allCastles[0].type);
    console.log(allCastles[0].castle);
    console.log(paginationNumber)
    setPaginationNumber(paginationNumber + 1)
  }

  useEffect(() => {
    async function getAllCastlesEngland() {
      const response = await fetch(`http://localhost:3000/castles/p/?pg=${paginationNumber}`);
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

        <p key={castle._id}><button>TEST</button>{castle.castle}</p>
        
     ))
      }
      <button onClick={handleClick}> LOAD MORE</button>
      </div>
     
    </div>
  );
}

export default AllCastles;
