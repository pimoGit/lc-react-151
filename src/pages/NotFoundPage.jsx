import { Link } from "react-router-dom"

function NotFoundPage() {

    return (
        <>
            <h2>Ciao benvenuto nel nulla assoluto 404</h2>
            <p>
                La pagina cercata non esiste, ma se vuoi torna alla Home cliccando sotto
            </p>
            <Link to="/" className="btn btn-primary">
                Torna alla home
            </Link>
        </>
    )
}

export default NotFoundPage
