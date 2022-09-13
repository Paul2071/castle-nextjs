import React from 'react'
import styles from '../styles/Home.module.css'

const Button = ({text, onClick}) => {
  return (
    <button  className={styles.btn} onClick={onClick}> {text}</button>
  )
}

export default Button