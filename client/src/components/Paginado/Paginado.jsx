import React from "react";
import s from '../Paginado/Paginado.module.css';

export default function Paginado ({ countriesPerPage, allCountries, paginated }) {
    const pageNumbers = [];
    const pageSecToFinish = allCountries - 9;
    pageNumbers.push(1);

    /* for (let i=2; i <= Math.ceil(((allCountries-countriesPerPage)/(countriesPerPage))+1); i++) {
        pageNumbers.push(i+1);
    } */
    
    for (let i=2; i <= Math.ceil((pageSecToFinish/countriesPerPage)+1); i++) {
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ul className={s.footer}>
                { pageNumbers && 
                pageNumbers.map(number => (
                    <li className='number' key={number}>      
                        <button className={s.paginationButton} onClick={() => paginated(number)}>{number}</button> 
                    </li> 
                ))}
            </ul>
        </nav>
    )
}