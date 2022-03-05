import React, {useContext, useState} from "react";
import Row from "../row";
import  {Consumer} from "../swapi-context";
import {PlanetDetailss ,PlanetListItems} from "../sw-components";
import {withRouter} from "react-router-dom";

const PlanetPage = ({selectedPlanetId ,history}) => {
     const setSelectedPlanetId=(id)=>{
         history.push(id)
    }


    const leftElement =<PlanetListItems setSelectedPlanetId={setSelectedPlanetId}/>

    const rightElement =<PlanetDetailss selectedPlanetId={selectedPlanetId} />


    return <Row left={leftElement} right={rightElement}/>
}


export default withRouter(PlanetPage)