import React, {useEffect, useState} from 'react';
import "./starship-list.css"

import WithSwapi from "../hoc";

const StarshipList = ({swapi ,setSelectedStarshipId ,getData ,children}) => {
    const [data, setData] = useState([])


     useEffect(()=> {
        getData().then(data => setData(data)).catch(error => error)
        },[])



    const elements = data.map((starship) => {
        return (<li
            key={starship.id}
            className="list-group-item"
            onClick={() => setSelectedStarshipId(starship.id)}>
            {starship.name}
        </li>)
    })

    return (
        <ul className="item-list list-group">{elements}
        </ul>
    );

}

const divideFunc=(swapi)=>({
    getData:swapi.getAllStarships
})
export default WithSwapi(StarshipList ,divideFunc);


