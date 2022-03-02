import PlanetList from "../planet-list";
import React from "react";
import WithSwapi from "../hoc";


const  dividePlanetFunc=(swapi)=>({
    getData:swapi.getAllPlanets
})

const PlanetListItems=(props)=>{
    return (
        <PlanetList {...props}  >
            {(item) => `${item.name}`}
        </PlanetList>
    )
}



export default WithSwapi(PlanetListItems ,dividePlanetFunc)