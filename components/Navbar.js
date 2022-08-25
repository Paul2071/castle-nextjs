import React from 'react'
import Link from "next/link"
import styles from "../styles/Home.module.css"



function Navbar() {
  return (
    <nav>
   
    <Link href="/"><a>Home</a></Link>
    <Link href="/visited"><a>Visited</a></Link>
    <Link href="/plan"><a>To Visit</a></Link>
    <Link href="/allcastles"><a>All Castles</a></Link>
    </nav>
  )
}

export default Navbar