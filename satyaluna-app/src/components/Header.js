import React from "react";
import SatyalunaLogo from "../../src/images/SatyalunaLogo.png"
import ClearOceanHeader from "../images/ClearOceanHeader.png"

function Header(){
    return(
        <header className="satyaluna-header">
            <img className="header-logo" src={SatyalunaLogo} alt="Satyaluna logo">
            </img>
            <h1>Satyaluna</h1>
        </header>
    )
}

export default Header;
