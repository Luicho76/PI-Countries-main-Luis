import { GET_COUNTRIES, FILTER_CONTINENT, ORDER_BY_NAME, FILTER_BY_POPULATION, GET_NAME_COUNTRIES, POST_ACTIVITY, GET_ACTIVITIES, GET_DETAIL, FILTER_BY_ACTIVITY } from "../actions/actionNames";

const initialState = {
    countries: [],
    allCountries: [],
    activities: [],
    allActivities: [],
    detail:[]
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state, 
                countries: action.payload,
                allCountries: action.payload,
                allActivities: action.payload,
            }

        case FILTER_CONTINENT:
            const allCountries = state.allCountries;
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(el => el.continents === action.payload)
            return{
                ...state,
                countries: continentFiltered,
            }

        case ORDER_BY_NAME:
            const sortedArr = action.payload === 'asc' ?
            state.countries.sort(function(a, b) {
                if(a.name > b.name) {
                    return 1;
                }
                if(a.name < b.name) {
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(a.name < b.name) { 
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                countries: sortedArr
            }

        case FILTER_BY_POPULATION:
            const filterPopulation = action.payload === 'ascpop' ?
            state.countries.sort(function(a, b) {
                if(a.population < b.population) {
                    return 1;
                }
                if(a.population > b.population) {
                    return -1;
                }
                return 0;
            }) :
            state.countries.sort(function(a, b) {
                if(a.population < b.population) {
                    return -1;
                }
                if(a.population > b.population) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                countries: filterPopulation
            }

        case GET_NAME_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }

        case POST_ACTIVITY:
            return {
                ...state,
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }

        case FILTER_BY_ACTIVITY:
            const activityFiltered = state.allCountries.filter(el => el.activities.some((a)=> a.name === action.payload))
            return {
                ...state,
                countries: activityFiltered
            }

        default:
            return state;
    }
}


export default rootReducer; 