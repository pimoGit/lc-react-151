import { useState } from "react";

function Accordion(props) {

    // settiamo la var di stato del componente per gestire l'apertura
    const [isOpen, setIsOpen] = useState(false);

    // destrutturiamo props
    const { title, content } = props;

    // funzione di gestione valore Open
    function handleOpen() {
        // setto il valore booleano al suo esatto opposto
        setIsOpen((current) => !current);
    }

    return (
        <div className="accordion">
            <div className="accordion__title">
                <h3>{title}</h3>
                <button
                    onClick={handleOpen}
                    className="accordion__btn">
                    {isOpen ? "-" : "+"}
                </button>
            </div>
            {isOpen && <div>{content}</div>}
        </div>
    )
}

export default Accordion
