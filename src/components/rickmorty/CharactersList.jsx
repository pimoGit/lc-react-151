import axios from "axios"
import { useState, useEffect } from "react"

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
                    <div
                        className="character"
                        key={character.id}
                    >
                        <div className="character-image">
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div className="character-info">
                            <p className="character-name">{character.name}</p>
                            <p className="character-status-origin">
                                <span className={`status-icon is-${character.status.toLowerCase()}`}></span>
                                {character.status} - {character.origin.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CharactersList
