function CharacterCard(props) {

    // destrutturiamo oggetto props
    // const image = props.image;
    // const status = props.status;
    // const name = props.name;
    // const originName = props.originName;

    const { image, status, name, originName } = props;

    return (
        <div
            className="character"
        >
            <div className="character-image">
                <img src={image} alt={name} />
            </div>
            <div className="character-info">
                <p className="character-name">{name}</p>
                <p className="character-status-origin">
                    <span className={`status-icon is-${status.toLowerCase()}`}></span>
                    {status} - {originName}
                </p>
            </div>
        </div>
    )
}

export default CharacterCard
