import React, {useState} from "react";

function Header ({handleClick, stateVar}){
    
    return (<header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{stateVar ? "Dark" : "Light"} Mode</button>
    </header>
  )
}

export default Header