import React from "react";
import Row from "../row";

import {withRouter} from "react-router-dom";

import {StarshipListt,StarshipDetailss} from "../sw-components";



const StarshipPage = ({selectedStarshipId ,history}) => {
    const setSelectedStarshipId=(id)=>{
        history.push(id)
    }
    // const [selectedStarshipId, setSelectedStarshipId] = useState(5)



    const leftElement =
        <StarshipListt setSelectedStarshipId={setSelectedStarshipId}/>

    const rightElement =<StarshipDetailss selectedStarshipId={selectedStarshipId}/>


    return <Row left={leftElement} right={rightElement}/>
}


export default withRouter(StarshipPage)