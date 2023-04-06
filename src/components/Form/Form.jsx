import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Form.module.css";
import validation from "./validation";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";


export default function Form() {
    const [videogame, setVideogame] = useState({
        name: "",
        description: "",
        image: "",
        platforms: [],
        rating: "",
        released: "",
        genres: [],
    });

    const [errors, setErrros] = useState({});

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres);

    useEffect(() => {
        dispatch(actions.getGenresDb())
    }, [dispatch]);

    function handleSubmit(event) {
        event.preventDefault();
        
        axios.post("http://localhost:3001/videogames", videogame)
        setErrros({});
        setVideogame({
            name: "",
            description: "",
            image: "",
            platforms: [],
            rating: "",
            released: "",
            genres: [],
        });

    };

    function handleGenres(event) {
        setVideogame({
            ...videogame,
            genres: [...videogame.genres, event.target.value]
        });
    };

    function handlePlatforms(event) {
        event.preventDefault();
        setVideogame({
            ...videogame,
            platforms: [...videogame.platforms, event.target.form.platforms.value]

        })
        event.target.form.platforms.value = ""
    }

    function handleChange(event) {
        if (event.target.name !== "platforms" || event.target.name !== "genres") {
            setVideogame({
                ...videogame,
                [event.target.name]: event.target.value
            })

        };
        setErrros(
            validation({
                ...videogame,
                [event.target.name]: event.target.value
            })
        );
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>Name:</label>
                <input autoComplete="off" name="name" value={videogame.name} onChange={handleChange} placeholder="name..." type="" />
                {errors.name !== "" && <p className={styles.danger}>{errors.name}</p>}

                <label>Image</label>
                <input autoComplete="off" name="image" value={videogame.image} onChange={handleChange} placeholder="image..." type="URL image..." />
                {errors.image !== "" && <p className={styles.danger}>{errors.image}</p>}

                <label>Description</label>
                <textarea autoComplete="off" name="description" value={videogame.description} onChange={handleChange} placeholder="description..." type="" />
                {errors.description !== "" && <p className={styles.danger}>{errors.description}</p>}

                <label>Platforms</label>
                <input autoComplete="off" name="platforms" placeholder="platforms..." type="text" />
                {errors.platforms !== "" && <p className={styles.danger}>{errors.platforms}</p>}
                <button onClick={handlePlatforms} className={styles.add}>Add</button>

                <select name="gender" onChange={handleGenres}>
                    <option value={null} disabled="disabled" selected="selected">Select genres...</option>
                    {
                        genres ?
                            genres.map((genre, index) => {
                                return (
                                    <option key={index} value={genre}>{genre}</option>
                                )
                            }) : null
                    }
                </select>
                <div>
                    {
                        videogame.genres.map((genre, index) => (<h4 key={index}>{genre}</h4>))
                    }
                </div>

                <label>Released</label>
                <input autoComplete="off" name="released" value={videogame.released} onChange={handleChange} placeholder="released..." type="date" />
                {errors.released !== "" && <p className={styles.danger}>{errors.released}</p>}

                <label>Rating</label>
                <input autoComplete="off" name="rating" value={videogame.rating} onChange={handleChange} placeholder="rating..." type="" />
                {errors.rating !== "" && <p className={styles.danger}>{errors.rating}</p>}

                <button className={styles.createButton} type="submit">Create</button>
            </form>

        </div>
    )
}