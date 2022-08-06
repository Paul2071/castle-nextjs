import React from 'react'
import styles from '../styles/Home.module.css'

const Button = ({text}) => {
  return (
    <button  className={styles.btn}> {text}</button>
  )
}

export default Button