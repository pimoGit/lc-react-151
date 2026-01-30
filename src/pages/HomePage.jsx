import { Link } from "react-router-dom"

// importiamo il context
import { useFavortite } from "../contexts/FavoriteContext"
// importiamo comp card listato
import CharacterCard from "../components/rickmorty/CharacterCard"

function HomePage() {

    // usiamo il context importato
    const { favorites, characters } = useFavortite();

    // creiamo versione filtrato con solo personaggi preferiti
    const favoriteCharacters = characters.filter(character => {
        return favorites.includes(character.id)
    });

    return (
        <>
            <h2>Ciao sei sulla Home Page della tua appa React.</h2>
            <p>
                Contenuto della HOMEPAGE
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum aliquam corporis eveniet corrupti tempore officiis, minima fuga iste cum numquam ex molestias quis aut commodi facere quia. Quaerat, reprehenderit!
            </p>
            <Link to="/personaggi" className="btn btn-primary">
                Vai alla lista dei personaggi
            </Link>

            <h3>I tuoi personaggi preferiti</h3>
            {favorites.length ? (
                <div className="characters">
                    {favoriteCharacters.map(character => (
                        <CharacterCard key={character.id}
                            character={character} />
                    ))}
                </div>
            ) : (
                <p>Non hai ancora aggiunto personaggi ai preferiti.</p>
            )}

        </>
    )
}

export default HomePage
