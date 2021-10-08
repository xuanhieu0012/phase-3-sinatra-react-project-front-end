import React from "react";
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
function NavBar({settoggleDetail}) {
    return (
        
                <nav className="navLinks">
                
                <NavLink exact to="/"><img className="logoImage" alt="logo" src={logo} onClick={()=>settoggleDetail(false)}></img></NavLink>
                <div className="inform">
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/submitForm">Submit New Flower</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                </div>
                <div className="storeName">
                    <h1>The Flower Shop</h1>
                </div>
                
                </nav>
    );
}

export default NavBar;