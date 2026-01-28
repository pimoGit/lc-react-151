import { Link, NavLink } from "react-router-dom";

function NavBar() {

    // dati per generazione voci menù
    const links = [
        { path: '/', label: 'HomePage' },
        { path: '/chisiamo', label: 'Chi siamo' },
        { path: '/personaggi', label: 'Lista personaggi' }
    ]

    return (
        <nav>
            <ul>
                {links.map((link, i) => (
                    <li key={i}>
                        <NavLink to={link.path}>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
