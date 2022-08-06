import React from 'react'
import Link from "next/link"
import styles from "../styles/Home.module.css"
import About from './../pages/about';


function Navbar() {
  return (
    <nav>
   
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>Visited</a></Link>
    <Link href="/castles"><a>To Visit</a></Link>
    </nav>
  )
}

export default Navbar