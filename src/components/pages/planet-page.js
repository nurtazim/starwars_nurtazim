import React, {useContext, useState} from "react";
import Row from "../row";
import  {Consumer} from "../swapi-context";
import {PlanetDetailss ,PlanetListItems} from "../sw-components";

const PlanetPage = () => {
    const [selectedPlanetId, setSelectedPlanetId] = useState(2)


    const leftElement =<PlanetListItems setSelectedPlanetId={setSelectedPlanetId}/>
    const rightElement =<PlanetDetailss selectedPlanetId={selectedPlanetId} />


    return <Row left={leftElement} right={rightElement}/>
}


export default PlanetPage