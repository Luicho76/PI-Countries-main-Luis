import axios from 'axios';
import {GET_COUNTRIES, GET_NAME_COUNTRIES, FILTER_CONTINENT, ORDER_BY_NAME, FILTER_BY_POPULATION, GET_ACTIVITIES, POST_ACTIVITY, GET_DETAIL, FILTER_BY_ACTIVITY} from './actionNames'

export function getCountries(){
    return async (dispatch) => {
        const res = await axios.get('/api/countries/', {});
        return dispatch({
            type: GET_COUNTRIES, 
            payload: res.data
        });
    }
}

export function getNameCountries(name){
    return async function(dispatch) {
    try {
        var country = await axios.get('/api/countries?name=' + name);
        return dispatch ({
            type: GET_NAME_COUNTRIES,
            payload: country.data
        })
    } catch (error) {
        console.log(error);
        }
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

export function getActivities() {
    return async function (dispatch) {
        const info = await axios.get('/api/activities')
        return dispatch({
            type: GET_ACTIVITIES,
            payload: info.data
        })
    };
}

export function postActivity(payload) {
    return async function (dispatch) {
        const response = await axios.post('/api/activities', payload)
        //console.log(response)
        return {
            type: POST_ACTIVITY,
            response
        }
    }
}

export function getCountryDetails (id) {
    return async function (dispatch) {
        try {
            var json = await axios.get('/api/countries/' + id);
            return dispatch ({
                type: GET_DETAIL,
                payload: json.data
            })
    } catch (error) {
        console.log(error)
        }
    }
}

export function filterByActivity (payload) {
    return {
        type: FILTER_BY_ACTIVITY,
        payload
    }
}