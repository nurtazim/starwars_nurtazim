import React, {useContext, useState} from "react";
import Row from "../row";
import  {Consumer} from "../swapi-context";


import {StarshipListt,StarshipDetailss} from "../sw-components";



const StarshipPage = () => {
    const [selectedStarshipId, setSelectedStarshipId] = useState(5)
    const swapi = useContext(Consumer)


    const leftElement =
        <StarshipListt setSelectedStarshipId={setSelectedStarshipId}/>

    const rightElement =<StarshipDetailss selectedStarshipId={selectedStarshipId}/>


    return <Row left={leftElement} right={rightElement}/>
}


export default StarshipPage