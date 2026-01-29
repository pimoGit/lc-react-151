function CharacterDetailCard(props) {

    const { infoPers } = props


    return (
        <div className="character-detail">
            <h2>{infoPers.name}</h2>
            <img src={infoPers.image} alt={infoPers.name} />
            <p>Status: {infoPers.status}</p>
            <p>Species: {infoPers.species}</p>
            <p>Origin: {infoPers.origin.name}</p>
            <p>Location: {infoPers.location.name}</p>
        </div>

    )
}

export default CharacterDetailCard
