import { Link } from "react-router-dom"

function CharacterDetailCard(props) {

    const { infoPers } = props


    return (
        <div className="character-detail">
            <h2>{infoPers.name}
                <span className="heart-icon">🤍</span>
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
