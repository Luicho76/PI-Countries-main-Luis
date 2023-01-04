import React from "react";
import { Link } from 'react-router-dom';
import s from './landingPage.module.css'

export default function LandingPage(){
    return(
        <div className={s.holder}>
            <div className={s.land}>
                <h3>Bienvenidos a este Proyecto Individual</h3>
                <Link className={s.link} to='/home'>
                    <button className={s.button}>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}