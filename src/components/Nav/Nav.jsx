import style from "./Nav.module.css";
import SearchBar from '../SearchBar/SearchBar.jsx';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className={style.nav}>
            <Link to="/home">
                <button className={style.home}>Home</button>
            </Link>
            <Link to="/form">
                <button className={style.form}>Create</button>
            </Link>
            <div className={style.searchBar}>
                <SearchBar className={style.searchBar} />
            </div>
        </div>
    )
}