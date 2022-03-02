
import {StarshipDetails ,Record} from "../starship-detals";
import React from "react";
import WithSwapi from "../hoc";


const StarshipDetailss = (props) => {
    return (
        <StarshipDetails {...props}  >
            <Record label="Model:" fieldName="model"/>
            <Record label="Manufacturer:" fieldName="manufacturer"/>
            <Record label="CostInCredits:" fieldName="costInCredits"/>
            <Record label="Length:" fieldName="length"/>
            <Record label="Crew:" fieldName="crew"/>
            <Record label="Passengers:" fieldName="passengers"/>
            <Record label="CargoCapacity:" fieldName="cargoCapacity"/>
        </StarshipDetails>

    )

}

const divideFunc = (swapi) => ({
    getData: swapi.getStarship,
    getImage: swapi.getStarshipImage
})


export default WithSwapi(StarshipDetailss,divideFunc)