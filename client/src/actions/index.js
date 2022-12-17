import axios from 'axios';
import {GET_COUNTRIES, FILTER_CONTINENT, ORDER_BY_NAME, FILTER_BY_POPULATION} from './actionNames'

export function getCountries(){
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3001/api/countries/', {});
        return dispatch({
            type: GET_COUNTRIES, 
            payload: res.data
        });
    }
}

export function filterByContinent(payload) {
    console.log(payload)
    return {
        type: FILTER_CONTINENT,
        payload
    }
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export function filterByPopulation(payload) {
    return {
        type: FILTER_BY_POPULATION,
        payload
    }
}