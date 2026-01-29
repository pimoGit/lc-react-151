// importiamo axios
import axios from "axios";
// importiamo hooks per gestione chiamata e recupero parametro dinamico
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const endpointBase = "https://rickandmortyapi.com/api/character/";

function CharachterDetail() {
    // recuper valore param dinamico grazie a hook useParams
    const { id } = useParams();

    // var di stato per salvare info oggetto personaggio
    const [character, setCharacter] = useState({});

    // utilizzo il parametro per la chiamata corretta (sempre passando da hook su primo montaggio)
    useEffect(() => {
        axios.get(endpointBase + id)
            .then(resp => setCharacter(resp.data))
            .catch(err => console.log("errore sulla chiamata", err))
    }, [])


    return (
        <>
            <h2>Ciao sei qui avrai il DETTAGLIO del personaggio.</h2>
            <p>
                Contenuto della LISTA DEI PERSONAGGI
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum aliquam corporis eveniet corrupti tempore officiis, minima fuga iste cum numquam ex molestias quis aut commodi facere quia. Quaerat, reprehenderit!
            </p>
            <div>
                <h3>Personaggio: {character.name}</h3>
            </div>
        </>
    )
}

export default CharachterDetail
