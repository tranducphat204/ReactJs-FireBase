import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="flex bg-black">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/signin">Signin</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;