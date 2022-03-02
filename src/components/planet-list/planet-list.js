import React, {useEffect, useState, useContext} from 'react';
import "./planet-list.css"
import {Consumer} from "../swapi-context";
import WithSwapi from "../hoc";

const PlanetList = ({ swapi ,setSelectedPlanetId ,getData ,children}) => {
    const [data, setData] = useState([])
    // const swapi = useContext(Consumer)

    useEffect(()=> {
        getData().then(data => setData(data)).catch(error => error)
        },[])

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

const divideFunc=(swapi)=>({
    getData:swapi.getAllPlanets
})
export default WithSwapi(PlanetList ,divideFunc);


