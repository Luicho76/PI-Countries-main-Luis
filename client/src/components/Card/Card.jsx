import React from "react";
import s from './card.module.css'

export default function Card({name, flags, continents}) {
    return (
        <div>
            <img src = { flags }  alt = 'Flag not found' width = '100px' height = '60px'/>
            <br/>
            <h4 className={s.h4}>{name}</h4>
            <br/>
            <h4 className={s.h4}>{continents}</h4>
        </div>
    )
}