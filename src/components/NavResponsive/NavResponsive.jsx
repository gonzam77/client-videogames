import styles from './NavResponsive.module.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default function NavResponsive() {
    return (
        <div className={styles.container}>
            <Link to="/home">
                <button className={styles.home}>Home</button>
            </Link>
            <Link to="/form">
                <button className={styles.form}>Create</button>
            </Link>
            <div className={styles.searchBar}>
                <SearchBar className={styles.searchBar} />
            </div>
        </div>
    )
}