import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryDetails } from "../../actions";
import ActivityCard from "../ActivityCard/ActivityCard";
import s from './details.module.css';

export function Details (props) {
    //console.log(props) 
    const dispatch = useDispatch();

    useEffect(() => {
        //console.log(props)
        dispatch(getCountryDetails(props.match.params.id)); //con esto accedo al id 
    }, [dispatch, props, props.match.params.id]);

    const myCountry = useSelector ((state) => state.detail)
    //console.log(myCountry)

    return (
        <div>
            {
                <div >
                    <h1 className={s.title}>Pais: {myCountry.name} ({myCountry.id})</h1>
                    <img src = { myCountry.flags }  alt = {myCountry.name} width = '150px' height = '80px'/>
                    <br/>
                    <h3 className={s.capital}>Capital: {myCountry.capital}</h3>
                    <br/>
                    <h2 className={s.continent}>Continente: {myCountry.continents}</h2>
                    <br/>
                    <h2 className={s.subregion}>Subregión: {myCountry.subregion}</h2>
                    <br/>
                    <h2 className={s.poblation}>Población: {myCountry.population} habitantes</h2>
                    <br/>
                    <h2 className={s.area}>Área: {myCountry.area} km2</h2>
                    <br/>
                </div>
                } 
                    {
                        myCountry.activities?.map((activity, index) => 
                            <ActivityCard
                            name={activity.name}
                            difficulty={activity.difficulty}
                            duration={activity.duration}
                            season={activity.season}
                            key={index}
                        />)
                    }
                    <br/>
                    <Link to = '/home'> 
                        <button className={s.button}>Volver</button>
                    </Link>
                </div>
    
)
    }
