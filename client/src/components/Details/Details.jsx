import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetails } from "../../actions";
import ActivityCard from "../ActivityCreate/ActivityCard";

export function Details (props) {
    console.log(props) 
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(props)
        dispatch(getCountryDetails(props.match.params.id)); //con esto accedo al id 
    }, [dispatch, props]);

    const myCountry = useSelector ((state) => state.detail)
    console.log(myCountry)

    return (
        <div>
            {
                <div>
                    <h1>Pais: {myCountry.name} ({myCountry.id})</h1>
                    <img src = { myCountry.flags }  alt = 'Flag not found' width = '100px' height = '60px'/>
                    <h2>Capital: {myCountry.capital}</h2>
                    <h2>Continente: {myCountry.continents}</h2>
                    <h2>Subregión: {myCountry.subregion}</h2>
                    <h2>Población: {myCountry.population} habitantes</h2>
                    <h2>Área: {myCountry.area} km2</h2>
                </div>
                } 
                    {
                        myCountry.activity?.map((e) => 
                            <ActivityCard
                            name={e.name}
                            difficulty={e.difficulty}
                            duration={e.duration}
                            season={e.season}
                            key={e.key}
                        />)
                    }
                    <Link to = '/home'> 
                        <button>Volver</button>
                    </Link>
                </div>
    
)
    }
