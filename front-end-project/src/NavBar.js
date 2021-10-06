import React from "react";
import { NavLink } from "react-router-dom"
import logo from "./assets/logo.png"
function NavBar() {
    return (
        
                <nav className="navLinks">
                   
                <NavLink exact to="/"><img className="logoImage" alt="logo" src={logo}></img></NavLink>
                <div className="inform">
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <div className="storeName">
                    <h1>The Flower Shop</h1>
                </div>
                </div>
                </nav>
    );
}

export default NavBar;