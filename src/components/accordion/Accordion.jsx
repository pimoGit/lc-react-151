function Accordion(props) {

    // destrutturiamo props
    const { title, content, isOpen, onAccToggle } = props;


    return (
        <div className="accordion">
            <div className="accordion__title">
                <h3>{title}</h3>
                <button
                    onClick={onAccToggle}
                    className="accordion__btn">
                    {isOpen ? "-" : "+"}
                </button>
            </div>
            {isOpen && <div>{content}</div>}
        </div>
    )
}

export default Accordion
