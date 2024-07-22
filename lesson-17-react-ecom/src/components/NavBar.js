import { Link } from "react-router-dom";

function NavBar () {
    return(
        <nav className="flex justify-between text-white items-center bg-blue-500 p-4">
            <h1 className="text-2xl">TechHub</h1>
            <ul className="flex gap-4 text-white">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li >
                <li>
                    <Link to="/products">
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        Cart (0)
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;