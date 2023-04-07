import React from "react";
import styles from "./Paginate.module.css"

export default function Paginate({ videogamesPerPage, videogames, paginate, currentPage }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(videogames / videogamesPerPage); i++) {
        pageNumbers.push(i);
    }

    function handlePrev(event) {
        if (currentPage > 1) {
            paginate(currentPage - 1)
        }
    }
    function handleNext(event) {
        if (currentPage < pageNumbers.length) {
            paginate(currentPage + 1)
        }
    }

    return (
        <div className={styles.container}>
            {
                pageNumbers.length ? 
                <button className={styles.prevPageButton} onClick={handlePrev}>prev</button> :
                null
            }
            <ul>
                {pageNumbers &&
                    pageNumbers.map((number, index) => {
                        return (
                            <li key={index} className={styles.pagination}>
                                <a className={styles.page} href="true" onClick={() => paginate(number)}>{number}</a>
                            </li>

                        )
                    })}
            </ul>
            {
                pageNumbers.length ? 
                <button className={styles.nextPageButton} onClick={handleNext}>next</button> :
                null
            }
        </div>
    )
}