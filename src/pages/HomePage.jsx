import { Link } from "react-router-dom"

function HomePage() {

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
        </>
    )
}

export default HomePage
