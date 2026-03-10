import React from "react";


import {ItemContainer} from "./styles";

function ItemRepo(){
    return(
        <ItemContainer>
            <h3>Artur</h3>
            <p>Dio/Artur</p>
            <a href="#" >Ver repositório</a> <br />
            <a href="#" className="remove">Remover</a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo