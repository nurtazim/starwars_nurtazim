import React, {useEffect, useState, useContext} from 'react';
import "./planet-list.css"
import Context from "../swapi-context";

const PlanetList = ({setSelectedPlanetId}) => {
    const [data, setData] = useState([])
    const swapi = useContext(Context)

    useEffect(() => {
            swapi.getAllPlanets().then(data => setData(data)).catch(error => error)
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [])


    const elements = data.map((planet) => {
        return (<li
            key={planet.id}
            className="list-group-item"
            onClick={() => setSelectedPlanetId(planet.id)}>
            {planet.name}
        </li>)
    })

    return (
        <ul className="item-list list-group">{elements}
        </ul>
    );

}
export default PlanetList;


