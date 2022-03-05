import PlanetList from "../planet-list";
import React from "react";
import WithSwapi from "../hoc";


const WichRenderFunc = (View, renderFunc) => {
    return (props) => {
        return <View {...props}>{renderFunc}</View>
    }
}

const PlanetListItems =
    WithSwapi(WichRenderFunc(PlanetList,(item)=>item.name), swapi => ({
        getData: swapi.getAllPlanets
    }))

export default PlanetListItems