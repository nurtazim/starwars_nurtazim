import React, {useContext, useState} from "react";

import Row from "../row";
import Context from "../swapi-context";
import PlanetList from "../planet-list/planet-list";
import {PlanetDetails, Record} from "../planet-detals";


const PlanetPage = () => {
    const [selectedPlanetId, setSelectedPlanetId] = useState(2)
    const swapi = useContext(Context)


    const leftElement =
        <PlanetList setSelectedPlanetId={setSelectedPlanetId} getData={swapi.getAllPlanets}>
            {(item) => `${item.name}`}
        </PlanetList>
    const rightElement =

        <PlanetDetails selectedPlanetId={selectedPlanetId} getData={swapi.getPlanet} getImage={swapi.getPlanetImage}>
            <Record label="Population:" fieldName="population"/>
            <Record label="RotationPeriod:" fieldName="rotationPeriod"/>
            <Record label="Diameter:" fieldName="diameter"/>
            <Record label="Climate:" fieldName="climate"/>
            <Record label="Gravity:" fieldName="gravity"/>
            <Record label="Terrain:" fieldName="terrain"/>
        </PlanetDetails>

    return <Row left={leftElement} right={rightElement}/>
}


export default PlanetPage