
import StarshipList from "../starship-list/starship-list";
import WithSwapi from "../hoc";

import React from "react";


const dividePeopleFunc = (swapi) => ({
    getData:swapi.getAllStarships

})



const WichRenderFunc = (View, renderFunc) => {
    return (props) => {
        return <View {...props}>{renderFunc}</View>
    }
}

const StarshipListt =
    WithSwapi(WichRenderFunc(StarshipList,(item)=>item.name), swapi => ({
        getData: swapi.getAllStarships
    }))

export default StarshipListt
