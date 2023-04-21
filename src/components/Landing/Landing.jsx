import React from "react";
import styles from "./Landing.module.css";
import landingImg from "../../assets/landing.png"
import { Link } from "react-router-dom";


export default function Landing() {

    return (
        <div className={styles.container}>
            <h1>Welcome to Videogames!</h1>
            <div>
                <Link to="/home">
                    <button className={styles.button}>ENTER</button>
                </Link>
            </div>
            <img src={landingImg} alt="Videogame_img" />
        </div>
    )
}

