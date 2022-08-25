import React from 'react'
import { useEffect, useState } from 'react'

function AllCastles() {


  async function getAllCastlesEngland () {
    const allCastles = []
    const response = await fetch(
               `http://localhost:3000/castles/all`
              );
              const data = await response.json();
              console.log(data)
              allCastles.push(data)  
              console.log(allCastles)
            }
            
   

  


    // useEffect(() => {
    //     const getAllCastlesEngland = async () => {
    //       const response = await fetch(
    //        'http://localhost:3000/castles/all'
    //       );
    //       const data = await response.json();
    //       console.log(data.payload);
    //     };
    //     getAllCastlesEngland();
    //   }, []);


  return (
    <div>
    <h1>All castles in England</h1>
    <button onClick={getAllCastlesEngland}> GET ALL CASTLES</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius doloribus voluptatem quo quam laudantium provident odit alias doloremque, hic quibusdam accusantium incidunt, architecto repellendus illum sunt! Mollitia, eveniet sequi.</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores deleniti earum voluptas facere, soluta quam aperiam esse ducimus ab in impedit sint beatae fugit sunt illum, autem, aliquam ex.</p>
    </div>
  )

  }
export default AllCastles