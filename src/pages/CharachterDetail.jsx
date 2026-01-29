// importiamo componente di listato
import { useParams } from "react-router-dom";

function CharachterDetail() {
    const { id } = useParams();

    return (
        <>
            <h2>Ciao sei qui avrai il DETTAGLIO del personaggio.</h2>
            <p>
                Contenuto della LISTA DEI PERSONAGGI
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo earum aliquam corporis eveniet corrupti tempore officiis, minima fuga iste cum numquam ex molestias quis aut commodi facere quia. Quaerat, reprehenderit!
            </p>
            <div>
                <h1>ID personaggio: {id}</h1>
            </div>
        </>
    )
}

export default CharachterDetail
