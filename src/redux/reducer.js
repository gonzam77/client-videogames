import {
    GET_ALL_VIDEOGAMES,
    GET_GENRES,
    GET_VIDEOGAME_BY_NAME,
    FILTER_BY_GENRES,
    FILTER_BY_LOCATION,
    ORDER_BY_NAME,
    ORDER_BY_RATING
} from "./actionTypes"

const initialState = {
    videogames: [],
    allVideogames: [],
    genres: []
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_VIDEOGAMES:
            return {
                ...state,
                videogames: payload,
                allVideogames: payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: payload
            }
        case GET_VIDEOGAME_BY_NAME:
            return {
                ...state,
                videogames: payload,
            }
        case ORDER_BY_NAME:
            if (payload === "Ascendente") {
                const videogamesOrdered = state.videogames.sort((a, b) => a.name.localeCompare(b.name));
                return {
                    ...state,
                    videogames: videogamesOrdered
                }
            }
            if (payload === "Descendente") {
                const videogamesOrdered = state.videogames.sort((a, b) => b.name.localeCompare(a.name));
                return {
                    ...state,
                    videogames: videogamesOrdered
                }

            }
            return { ...state }
        case ORDER_BY_RATING:
            if (payload === "Ascendente") {
                const videogamesOrdered = state.videogames.sort((a, b) => b.rating - a.rating);
                return {
                    ...state,
                    videogames: videogamesOrdered
                }
            }
            if (payload === "Descendente") {
                const videogamesOrdered = state.videogames.sort((a, b) => a.rating - b.rating);
                return {
                    ...state,
                    videogames: videogamesOrdered
                }

            }
            return { ...state }
        case FILTER_BY_GENRES:

            if (payload === "all") {
                return {
                    ...state,
                    videogames: state.allVideogames
                }
            }
            return {
                ...state,
                videogames: state.videogames.filter(videogame => {
                    if (videogame.genres.includes(payload)) return videogame
                    return null
                })
            }
        case FILTER_BY_LOCATION:
            if (payload === "database") {
                return {
                    ...state,
                    videogames: state.allVideogames.filter(videogame => {
                        console.log(state.videogames)
                        return videogame.createdInDb
                    })
                }
            }
            if (payload === "api") {
                return {
                    ...state,
                    videogames: state.allVideogames.filter(videogame => typeof videogame.id === "number")
                }
            }
            return {
                ...state,
                videogames: state.allVideogames
            }

        default:
            return { ...state }
    }
}