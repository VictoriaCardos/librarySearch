import React from "react";
//import api from "../../services/api";

import {
    HeaderSection,
    HeaderTitle,
    HeaderSubtitle
  } from './styles'
  

const Header = () => {
    
    return(
        <HeaderSection>
            <HeaderTitle>Library Tech</HeaderTitle>
            <HeaderSubtitle>Your online book search space</HeaderSubtitle>
        </HeaderSection>
    )
}

export default Header