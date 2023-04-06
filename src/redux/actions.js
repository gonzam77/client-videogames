import {
    GET_GENRES,
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAME_BY_NAME,
    FILTER_BY_GENRES,
    FILTER_BY_LOCATION,
    ORDER_BY_RATING,
    ORDER_BY_NAME
}
    from "./actionTypes";
import axios from "axios";

export const getGenresDb = () => {
    return async function (dispatch) {
        const response = await axios('http://localhost:3001/genres/db');
        const data = response.data
        return dispatch({
            type: GET_GENRES,
            payload: data
        })
    }
};

export const getAllVideogames = () => {
    return async function (dispatch) {
        const response = await axios("http://localhost:3001/videogames");
        const data = response.data;
        return dispatch({
            type: GET_ALL_VIDEOGAMES,
            payload: data,
        })
    }
};

export const getVideogameByName = (name) => {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/videogames/name?search=${name}`);
        const data = response.data;
        return dispatch({
            type: GET_VIDEOGAME_BY_NAME,
            payload: data,
        })
    }
};

export const orderByName = (nameOrder) => {
    return {
        type: ORDER_BY_NAME,
        payload: nameOrder
    }
};

export const orderByRating = (ratingOrder) => {
    return {
        type: ORDER_BY_RATING,
        payload: ratingOrder
    }
};

export const filterByGenres = (genre) => {
    return {
        type: FILTER_BY_GENRES,
        payload: genre
    }
};


export const filterByLocation = (location) => {
    return {
        type: FILTER_BY_LOCATION,
        payload: location
    }
};
