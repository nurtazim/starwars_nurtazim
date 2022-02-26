import React, {useEffect, useState, useContext} from 'react';

import "./starship-list.css"
import Context from "../swapi-context";

const StarshipList = ({setSelectedStarshipId}) => {
    const [data, setData] = useState([])
    const swapi = useContext(Context)

    useEffect(() => {
            swapi.getAllStarships().then(data => setData(data)).catch(error => error)
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [])


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
export default StarshipList;


