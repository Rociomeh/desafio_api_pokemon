import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";

function Detalles ()  {

    const [character, setCharacter] = useState({})
    const {id} = useParams()

    useEffect(() => {
        peticionPersonaje()
    }, [id])

    async function peticionPersonaje() {
        try {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`
            const res = await fetch(apiUrl)
            const data = await res.json()
            setCharacter(data.results)
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <h1>{id}</h1>
            <img src={results.image} alt={`foto ${results.name}`} />
        </>
    )
}

export default Detalles;