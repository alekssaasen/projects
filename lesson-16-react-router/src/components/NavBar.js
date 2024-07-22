import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext"

function NavBar () {

    const [auth, setAuth] = useContext(AuthContext);

    return(
    <nav className="bg-rose-500 text-white p-4">
        <ul className="flex gap-4">
            <NavItems title="Home" to="/"/>
            <NavItems title="About" to="/about" />
            {auth ? 
                <NavItems title="Protected" to="/protected"/>
                : null
            }
            <NavItems title="Contact" to="contact"/>
        </ul>
    </nav>
    );
}

function NavItems ( {title, to} ) {
    return (
        <li>
            <Link to={to}>
                {title}
            </Link>
        </li>
    );
}

export { NavBar };