import React from 'react'
import styles from '../styles/Home.module.css'

const InputField = ({text, onChange}) => {
  return (
    <input type={text} onChange={onChange}  />
  )
}

export default InputField