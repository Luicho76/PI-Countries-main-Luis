/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getCountries, filterByContinent, orderByName, filterByPopulation} from '../../actions/index';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import SearchBar from '../SearchBar/SearchBar';


export default function Home(){

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    // eslint-disable-next-line no-unused-vars
    const [orden, setOrden] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const idenxOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = idenxOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, idenxOfLastCountry);
    
    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const pageValidation = (currentPage) => {
        if(currentPage ===1) {
            return setCountriesPerPage(9);
        } else {
            return setCountriesPerPage(10);
        }
    }

    useEffect( () => {
        pageValidation(currentPage);
    }, [currentPage])

    useEffect (() => {
        dispatch(getCountries());
    }, [dispatch]);

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    };

    function handleFilterContinent(e) {
        dispatch(filterByContinent(e.target.value))}; //va a tomar como payload el valor de cada uno de los value de las option del select
    
    function handleSort (e) {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        setOrden(`Ordenado ${e.target.value}`) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };

    function handleSortPop (e) {
        e.preventDefault();
        dispatch(filterByPopulation(e.target.value));
        setCurrentPage(1); // cuando hago el ordenamiento lo hago desde la pagina 1, 
        setOrden(`Ordenado ${e.target.value}`) // setOrden es un estado local que en un inicio va a estar vacio, para cuando seteo en la pagina 1, me modifica el estado local y renderiza
    };


    return (
        <div>
            <h1>PAISES</h1>
            <Link to='/activity'>Crear Actividad</Link>
            <br/>
            <button onClick={e => {handleClick(e)}}>
                Recargar paises
            </button>
            <div>
                <select onChange={e => handleSort(e)}>
                    <option disabled>Orden Alfabetico</option>
                    <option value='asc'>Ascendente</option>
                    <option value='desc'>Descendente</option>
                </select>
                <select onChange={e => handleSortPop(e)}>
                    <option disabled>Filtro por Poblacion</option>
                    <option value="ascpop">↑ Población Ascendente</option>
                    <option value="descpop">↓ Población Descendente</option>
                </select>
                <select onChange={e => handleFilterContinent(e)}>
                    <option value="All">Continentes</option>
                    <option value="Africa">África</option>
                    <option value="Antarctic">Antartida</option>
                    <option value="Americas">América</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
                <select> 
                <option value = ''>Filtrar por actividad</option> 
                </select>
            <Paginado
            countriesPerPage = { countriesPerPage }
            allCountries = { allCountries.length }
            paginated = { paginated }
            /> 
            <SearchBar/>
            <br/>

            {
                currentCountries?.map(c => {
                    return(
                        <div>
                            <Link to={"/home/" + c.id}>
                                <Card key = { c.id } name={c.name} flags={c.flags} continents={c.continents}/>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};