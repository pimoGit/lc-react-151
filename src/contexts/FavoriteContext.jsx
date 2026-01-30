import { createContext, useContext, useState, useEffect } from "react";

const FavortiteContext = createContext();

const endpoint = "https://rickandmortyapi.com/api/character";

// import axios per chiamata
import axios from "axios"


function FavortiteProvider({ children }) {

    // creiamo var di stato per lista personaggi
    const [characters, setCharacters] = useState([]);
    // var di stato per gestire gli ID dei preferiti
    const [favorites, setFavorites] = useState([]);

    // funzioni di gestione dei preferiti
    const addFavorite = (characterId) => {
        setFavorites(prev => [...prev, characterId]);
    };

    const removeFavorite = (characterId) => {
        setFavorites(prev => prev.filter(id => id !== characterId));
    };

    const isFavorite = (characterId) => {
        return favorites.includes(characterId);
    };

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
        <FavortiteContext.Provider
            value={{
                characters,
                favorites,
                addFavorite,
                removeFavorite,
                isFavorite
            }}
        >
            {children}
        </FavortiteContext.Provider>
    );
}


// Definiamo un hook per consumare il contesto
function useFavortite() {
    const context = useContext(FavortiteContext);
    return context;
}

// Esportiamo il nostro provider ed il nostro hook
export { FavortiteProvider, useFavortite }