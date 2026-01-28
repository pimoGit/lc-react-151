import { Link, NavLink } from "react-router-dom";

function NavBar() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">HomePage</Link>
                </li>
                <li>
                    <NavLink to="/chisiamo">Chi siamo</NavLink>
                </li>
                <li>
                    <NavLink to="/personaggi">Lista personaggi</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
