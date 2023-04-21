import React from "react";
import styles from "./Landing.module.css";
import landingImg from "../../assets/landing.png"
import { Link } from "react-router-dom";


export default function Landing() {

    return (
        <div className={styles.container}>
            <Link to="/home">
                <button className={styles.button}>ENTER</button>
            </Link>
            <h1>Welcome to Videogames!</h1>
            <img src={landingImg} alt="Videogame_img" />
        </div>
    )
}

