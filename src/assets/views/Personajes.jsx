import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Personajes () { 

    const [personajes, setPersonajes] = useState([])
    const [optionSelected, setOptionSelected] = useState("")

    useEffect(() => {
        peticionApi()
    }, [])

    const peticionApi = async() => {
        try{
            const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
            const res = await fetch(apiUrl)
            const data = await res.json()
            console.log("dentro de la peticion")
            console.log(data)
            setPersonajes(data.results)
        }
        catch(error) {
            console.log(error)
        }
    }

    const handleSelect = ({tatrget: {value} }) => setOptionSelected(value)
    
    const navigate = useNavigate()

    const goToDetails = () => {
        if (!optionSelected) {
            alert("Debes seleccionar un personaje")
        } else {
            navigate(`/personajes/${optionSelected}`)
        }
    }

    return(
        <>
        <h1>Selecciona un pokemon</h1>
        <section>
            <h2>{optionSelected}</h2>
            <select onChange={(value)=> handleSelect(value)}>
                <option value="" disabled>Personaje</option>
                {personajes && personajes.map(({id, name}) =>
                    <option value={name} key={id}>{name}</option>
                )}
            </select>
            <button onClick={goToDetails}>Buscar</button>
        </section>
        </>
    )
}

export default Personajes;