import React, {useContext, useState} from "react";
import Row from "../row";
import Context from "../swapi-context";

import {StarshipDetails ,Record} from "../starship-detals";

import StarshipList from "../starship-list";


const StarshipPage = () => {
    const [selectedStarshipId, setSelectedStarshipId] = useState(5)
    const swapi = useContext(Context)


    const leftElement =
        <StarshipList setSelectedStarshipId={setSelectedStarshipId} getData={swapi.getAllStarships}>
            {(item) => `${item.name}`}
        </StarshipList>
    const rightElement =
        <StarshipDetails selectedStarshipId={selectedStarshipId} getData={swapi.getStarship} getImage={swapi.getStarshipImage}>
            <Record label="Model:" fieldName="model"/>
            <Record label="Manufacturer:" fieldName="manufacturer"/>
            <Record label="CostInCredits:" fieldName="costInCredits"/>
            <Record label="Length:" fieldName="length"/>
            <Record label="Crew:" fieldName="crew"/>
            <Record label="Passengers:" fieldName="passengers"/>
            <Record label="CargoCapacity:" fieldName="cargoCapacity"/>
        </StarshipDetails>

    return <Row left={leftElement} right={rightElement}/>
}


export default StarshipPage