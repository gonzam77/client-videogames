import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css"
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
    const [videogame, setVideogame] = useState({
        name: ""
    });
    const [searching, setSearching] = useState({
        active: false
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function search() {
        dispatch(actions.getVideogameByName(videogame.name));
        setSearching({
            active: true,
        })
    }

    function clean(){
        dispatch(actions.getAllVideogames());
        videogame.name = ""; //no borra el input
    }

    function save(event) {
        setVideogame({
            ...videogame,
            name: event.target.value
        });
    };

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            navigate("/home");
            search();
            videogame.name = "";
        };
    };

    return (
        <div>
            <input value={videogame.name} onChange={save} className={styles.input} onKeyDown={handleKeyDown} type='search' />
            <button className={styles.searchButton} onClick={search}>Search</button>
            {
               searching.active ? <button className={styles.searchButton} onClick={clean}>Clean</button> : null
            }
        </div>

    )
};