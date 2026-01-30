import { Link } from "react-router-dom";

// importiamo il contesto
import { useFavortite } from "../../contexts/FavoriteContext";

function CharacterCard({ character }) {

    // usiamo il contesto, richiamando solo i valori che ci servono qui
    const { isFavorite, addFavorite, removeFavorite } = useFavortite();

    // controlliamo se è preferito o meno
    const favorite = isFavorite(character.id);

    // prepariamo una funzione per stabilire l'azione da intraprendere
    const toggleFavorite = () => {
        if (favorite) {
            removeFavorite(character.id);
        } else {
            addFavorite(character.id);
        }
    };

    // destrutturiamo oggetto props
    const { image, status, name, originName, id } = character;

    return (
        <div
            className="character"
        >
            <div className="character-image">
                <img src={image} alt={name} />
            </div>
            <div className="character-info">
                <p className="character-name">{name}
                    <span
                        className="heart-icon"
                        onClick={toggleFavorite}  // chiamiamo l'azione al click
                    // stabiliamo se il cuore è bianco o rosso
                    >
                        {favorite ? '❤️' : '🤍'}
                    </span>
                </p>
                <p className="character-status-origin">
                    <span className={`status-icon is-${status.toLowerCase()}`}></span>
                    {status} - {originName}
                </p>
                <Link to={`/personaggi/${id}`}>
                    Vai al dettaglio
                </Link>

            </div>
        </div >
    )
}

export default CharacterCard
