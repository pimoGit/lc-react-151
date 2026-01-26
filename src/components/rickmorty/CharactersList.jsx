import axios from "axios"
import { useState } from "react"

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

    return (
        <div>
            <h2>Ecco i personaggi di Rick & Morty</h2>
            <button onClick={fetchCharacters}>Carica Personaggi</button>
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default CharactersList
