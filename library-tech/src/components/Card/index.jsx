import React from "react";
//import api from "../../services/api";

import {
    CardContainer,
    CardImage,
    CardTitle,
    CardDescription
  } from './styles'
  

const Card = () => {
    
    return(
        <CardContainer>
            <CardImage/>
            <CardTitle>Library Tech</CardTitle>
            <CardDescription>Your online book search space</CardDescription>
        </CardContainer>
    )
}

export default Card