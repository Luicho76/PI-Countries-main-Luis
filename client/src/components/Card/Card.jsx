import React from "react";

export default function Card({name, flags, continents}) {
    return (
        <div>
            <img src = { flags }  alt = 'Flag not found' width = '100px' height = '60px'/>
            <h4>{name}</h4>
            <h4>{continents}</h4>
        </div>
    )
}