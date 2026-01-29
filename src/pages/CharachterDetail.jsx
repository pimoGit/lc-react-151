// importiamo axios
import axios from "axios";
// importiamo hooks per gestione chiamata e recupero parametro dinamico
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// import del comp di card dettaglio
import CharacterDetailCard from "../components/rickmorty/CharacterDetailCard";

const endpointBase = "https://rickandmortyapi.com/api/character/";

function CharachterDetail() {
    // recuper valore param dinamico grazie a hook useParams
    const { id } = useParams();

    // var di stato per salvare info oggetto personaggio
    const [character, setCharacter] = useState();

    // utilizzo il parametro per la chiamata corretta (sempre passando da hook su primo montaggio)
    useEffect(() => {
        axios.get(endpointBase + id)
            .then(resp => setCharacter(resp.data))
            .catch(err => {
                console.log("errore sulla chiamata", err)
                navigate('/personaggi');
            })
    }, [])

    // eseguiamo useNavigate per aver un elemento navigate da utilizzare
    const navigate = useNavigate();


    return (
        <>
            <h2>DETTAGLIO del personaggio.</h2>
            {character ? (
                <CharacterDetailCard infoPers={character} />
            ) : (
                <p className="loader">Loading...</p>
            )
            }

        </>
    )
}

export default CharachterDetail
