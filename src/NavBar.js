import React from "react";
import { Link } from "react-router-dom";

function NavBar()
{
    return(
        <div style={{textAlign:"center"}}>            
            <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/login">Login</Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/about">About</Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/contact">Contact</Link>             
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to="/empinfo">New Employee</Link>             
        </div>
    );
}

export default NavBar;