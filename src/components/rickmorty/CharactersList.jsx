// import axios from "axios"
// import { useState, useEffect } from "react"

import { useFavortite } from "../../contexts/FavoriteContext";

import CharacterCard from "./CharacterCard";

function CharactersList() {

    // usiamo contesto e prendiamo valore che ci serve
    const { characters } = useFavortite();

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
