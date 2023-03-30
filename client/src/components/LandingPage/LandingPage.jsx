import React from "react";
import { Link } from 'react-router-dom';
import s from './landingPage.module.css'

export default function LandingPage(){
    return(
        <div className={`${s.holder} ${s.land}`}>
            <p>¡Bienvenidos a nuestro sitio web de viajes! Aquí encontrarás información sobre diferentes países, su continente, población, bandera y actividades turísticas destacadas. Además, puedes contribuir a nuestra comunidad agregando tus propias actividades a través de nuestro formulario. ¡Descubre el mundo a través de nuestros ojos y los de otros viajeros apasionados! ¡Únete hoy mismo!</p>
            <Link className={s.link} to='/home'>
                <button className={s.button}>Ingresar</button>
            </Link>
        </div>
    )
}
