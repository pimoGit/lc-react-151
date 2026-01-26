import axios from "axios"
import { useState, useEffect } from "react"

import CharacterCard from "./CharacterCard";

const endpoint = "https://rickandmortyapi.com/api/character";

function CharactersList() {

    // creiamo var di stato per lista personaggi
    const [characters, setCharacters] = useState([]);

    // funzione che al click fa chiamata Ajax verso endpoint API
    function fetchCharacters() {
        axios.get(endpoint)
            .then((res) => setCharacters(res.data.results))
            .catch(err => console.error("Errore nella richiesta"))
    }

    // chiamata a funzione di richiesta personaggi
    // es. commentato di come NON fare (ovvero senza lo useEffect)
    // fetchCharacters();

    // versione corretta con useEffect e senza dipendeze (aolo al primo montaggio del comp)
    useEffect(fetchCharacters, []);

    return (
        <div className="container">
            <h1>Rick & Morty - Wiki</h1>
            <div className="characters">
                {characters.map(character => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>
        </div>
    )
}

export default CharactersList
