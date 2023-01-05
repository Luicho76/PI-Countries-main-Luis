import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../../actions/index';
import s from './searchBar.module.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const[name, setName] = useState('');
    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
        //console.log(name);
    } 

    function handleSubmit(e) {
        e.preventDefault();
        if(getNameCountries(!name)){
            return alert('El pais buscado no existe');
        } else {
            dispatch(getNameCountries(name)); 
        }
        setName('');
    }

    return (
        <div className={s.nav}>
            <input type = 'text' placeholder = 'Buscar pais...' onChange = {(e) => handleInputChange(e)} />
            <button type = 'submit' onClick = {(e) => handleSubmit(e)}>Buscar</button>              
        </div>
    )
}