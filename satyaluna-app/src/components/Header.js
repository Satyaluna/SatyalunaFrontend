import React from "react";
import SatyalunaLogo from "../../src/images/SatyalunaLogo.png";

function Header(){
    return(
        <div className="satyaluna-header">
            <header className="header-elements">
            <img className="header-logo" src={SatyalunaLogo} alt="Satyaluna logo">
            </img>
            <h1>Satyaluna</h1>
            </header>
        </div>
    )
}

export default Header;
