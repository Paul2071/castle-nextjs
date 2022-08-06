import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import InputField from "../components/Input";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [userInput, setUserInput] = useState("");

  function onChange(e) {
    setUserInput(e.target.value);
  }

  return (
    <div className={styles.inputbtncontainer}>
      <h1 className={styles.title}>Castle-logue</h1>

      <div >
        <InputField 
          type={"text"} 
          onChange={onChange}>
        </InputField>

        <a
          href={`https://en.wikipedia.org/wiki/List_of_castles_in_${userInput}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button text={"SEARCH"} ></Button>
        </a>
      </div>
      <p className={styles.text}>
        Enter a country in the input and press search to be taken to Wikipedias
        entry for castles on that particular country.
      </p>
    </div>
  );
}
