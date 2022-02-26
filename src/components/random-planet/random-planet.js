import React, {useState, useEffect, useContext} from 'react';

import './random-planet.css';

import Context from "../swapi-context";


const Loader = () => <h1>Loading...</h1>
const Error = () => <h1>Something went wrong...</h1>


const RandomPlanet = () => {
    const [data, setData] = useState({
        loading: true,
        error: false,
    })
    const swapi = useContext(Context)

    useEffect(() => {
        const updatePlanet = () => {
            const id = Math.floor(Math.random() * (20 - 1) +1);
            swapi.getPlanet(id).then(planet => {
                setData({...data, ...planet, loading: false, error: false})
            }).catch(error => {
                setData({...data, loading: false, error: true})
            })
        }

        updatePlanet()
        const planetInterval = setInterval(() => {
            updatePlanet()
        }, 3000)

        return () => clearInterval(planetInterval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {id, name, population, rotationPeriod, diameter} = data;
    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

    if (data.loading) {
        return <Loader/>
    }

    if (data.error) {
        return <Error/>
    }

    return (
        <div className="random-planet jumbotron rounded">
            <img className="planet-image" src={imageUrl} alt=""/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RandomPlanet;
