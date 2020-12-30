import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="nav-bar">
            <Link exact to='/'><h3>Home</h3></Link>
            <Link exact to='/users'><h3>User</h3></Link>
            <button>Login</button>
            <button>Logout</button>
        </div>
    );
}
export default NavBar;