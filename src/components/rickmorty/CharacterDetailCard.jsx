import { Link } from "react-router-dom"

// importiamo il contesto
import { useFavortite } from "../../contexts/FavoriteContext";

function CharacterDetailCard(props) {

    // usiamo il contesto, richiamando solo i valori che ci servono qui
    const { isFavorite, addFavorite, removeFavorite } = useFavortite();

    // destrutturiamo props
    const { infoPers } = props


    // controlliamo se è preferito o meno
    const favorite = isFavorite(infoPers.id);

    // prepariamo una funzione per stabilire l'azione da intraprendere
    const toggleFavorite = () => {
        if (favorite) {
            removeFavorite(infoPers.id);
        } else {
            addFavorite(infoPers.id);
        }
    };




    return (
        <div className="character-detail">
            <h2>{infoPers.name}
                <span
                    className="heart-icon"
                    onClick={toggleFavorite}  // chiamiamo l'azione al click
                // stabiliamo se il cuore è bianco o rosso
                >
                    {favorite ? '❤️' : '🤍'}
                </span>
            </h2>
            <img src={infoPers.image} alt={infoPers.name} />
            <p>Status: {infoPers.status}</p>
            <p>Species: {infoPers.species}</p>
            <p>Origin: {infoPers.origin.name}</p>
            <p>Location: {infoPers.location.name}</p>

            <Link to="/personaggi" className="btn btn-primary">
                Torna alla lista dei personaggi
            </Link>

        </div>

    )
}

export default CharacterDetailCard
