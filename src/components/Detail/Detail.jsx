import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import styles from "./Detail.module.css"

export default function Detail() {
    const [videogame, setVideogame] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // fetch(`http://localhost:3001/videogames/${id}`)
        fetch(`https://server-videogames-pi.onrender.com/videogames/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    data.genres = data.genres.join(", ");
                    data.platforms = data.platforms.join(", ")
                    setVideogame(data);
                }
            })
        return setVideogame({});
    }, [id])

    return (
        <div className={styles.container}>
            {
                videogame.id ? (
                    <div>
                        <h1>{videogame.name}</h1>
                        <img className={styles.img} src={videogame.image} alt={videogame.name} width={"300px"} />
                        <h4>ID:{videogame.id}</h4>
                        <h4>Genres: {videogame.genres}</h4>
                        <h4>Platforms: {videogame.platforms}</h4>
                        <h5>Released: {videogame.released}</h5>
                        <h5>Rating: {videogame.rating}</h5>
                        <h4>Descripcion:</h4>
                        <div>
                            {videogame.description}
                        </div>
                    </div>) :
                    <h1>LOADING...</h1>
            }
        </div>
    )
}