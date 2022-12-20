import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNameCountries } from '../../actions/index';

export default function SearchBar() {
    const dispatch = useDispatch();
    const[name, setName] = useState('');
    //tengo que guardar en mi estado local, lo que vaya apareciendo en el input 
    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
    } 

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNameCountries(name)); //en el estado local name voy a ir guardando lo que vaya tipeando el usuario
        setName('');
    }

    return (
        <div>
            <input type = 'text' placeholder = 'Buscar pais...' onChange = {(e) => handleInputChange(e)} />
            <button type = 'submit' onClick = {(e) => handleSubmit(e)}>Buscar</button>              
        </div>
    )
}