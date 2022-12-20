import React, {useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getCountries } from '../../actions/index';
import s from './ActivityCreate.module.css';


function validate(input) {
    let errors = {};
    if(!input.name || input.name.length < 3 || !input.name.match( (/^[A-Za-z]+$/))) {
        errors.name =  'Se requiere que ingrese un nombre para la actividad';
    } else if (!input.difficulty) {
        errors.difficulty = 'Se requiere que ingrese una dificultad para la actividad';
    } else if (!input.duration) {
        errors.duration = 'Se requiere que ingrese una duración para la actividad'
    } else if (!input.season) {
        errors.season = 'Se requiere que ingrese una estación para la actividad';
    } else if (!input.country) {
        errors.country = 'Se requiere que ingrese un pais para la actividad'
    }
    return errors;
}

export function ActivityCreate(){
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
        const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: []
    })
    const history = useHistory();
    const[errors, setErrors] = useState({})


    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);//ojo aca


    function handleChange(e) {//cada vez que se ejecuta handlechange, al estado input, 
        setInput({//ademas de lo que tiene, se le agrega el target.value
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        console.log(input);
    }


    function handleSelect(e) {// cuando mando el country, traigo lo que ya habia en el estado y le concateno el target value
        setInput({
            ...input,
            country: [...input.country, e.target.value]
        })
    }


    function handleSubmit(e) {                
        e.preventDefault();
        console.log(input);
        dispatch(postActivity(input));
        alert('Actividad creada con éxito');
        setInput({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: []
        })
        history.push('/home');//metodo del router que me redirecciona a la ruta que decida
    }


    function handleDelete(el) {
        setInput({
            ...input,
            country: input.country.filter( country => country !==el) // me devuelve el estado nuevo, que es un array, sin el elemento que clickee
        })
    }


    return (
        <div className={s.container}>
            <Link to= '/home'><button className={s.backButton}>Volver</button></Link>
            <h1 className={s.title}>Crea tu Actividad!</h1>
            <div>
                <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
                    <div className={s.select}>
                        <label>Nombre de la actividad: </label>
                        <input
                        type= 'text'
                        value= {input.name}
                        name = 'name'
                        autoComplete='off'
                        placeholder='Ingrese nombre de la actividad'
                        onChange={(e) => handleChange(e)}
                        />
                        {errors.name && (
                            <p className='error'>{errors.name}</p> 
                        )}
                    </div>
                    <div className={s.select}>
                        <label>Dificultad: </label>
                        <select
                        name='difficulty' 
                        value={input.difficulty} 
                        className={s.selectBox} 
                        onChange={(e) => handleChange(e)}>
                            <option value=''>Seleccione la dificultad</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                {errors.difficulty && (
                            <p className='error'>{errors.difficulty}</p>
                        )}
                        </select>
                    </div>
                    <div className={s.select}>
                        <label>Duración: </label>
                        <input
                            type= 'number'
                            value= {input.duration}
                            name = 'duration'
                            autocomplete='off'
                            min='0'
                            placeholder='Ingresar dato de duración'
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.duration && (
                            <p className='error'>{errors.duration}</p> 
                        )}
                    </div>
                    <div className={s.select}>
                    <label>Estación: </label>
                        <select 
                            name='season' 
                            value={input.season} 
                            onChange={(e) => handleChange(e)}>
                                <option value=''>Selecciona la estación</option>
                                <option value='Summer'>Verano (Summer)</option>
                                <option value='Autumn'>Otoño (Autumn)</option>
                                <option value='Winter'>Invierno (Winter)</option>
                                <option value='Spring'>Primavera (Spring)</option>
                                {errors.season && (
                            <p className='error'>{errors.season}</p> 
                        )}
                        </select>
                    </div>
                    <div className={s.select}>
                        <label>Pais: </label>
                            <select onChange={(e) => handleSelect(e)}>
                                {countries.map((country) => (
                                    <option value={country.name}>{country.name}</option>
                                ))}
                            </select>
                    </div>
                    <br/>
                        <button className={s.submitButton} type='submit'>Crear actividad</button>
                </form>
                {input.country.map(el => 
                    <div className={s.countryContainer}>
                        <div className={s.country}>{el}</div>
                        <button className={s.deleteButton} onClick = { () => handleDelete(el)}>X</button>    
                    </div> )}
            </div>
        </div>
    )
}