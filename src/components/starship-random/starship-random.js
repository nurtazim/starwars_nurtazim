import React, {useState, useEffect, useContext} from 'react';

import "./starship.css"

import {Consumer} from "../swapi-context";

const Loader = () => <h1>Loading...</h1>
const Error = () => <h1>Something went wrong...</h1>


const RandomStarship = () => {
    const [data, setData] = useState({
        loading: true,
        error: false,
    })
    const swapi = useContext(Consumer)

    useEffect(() => {
        const updateStarship = () => {
            const id = Math.floor(Math.random() * (18 - 1) + 1);
            swapi.getStarship(id).then(starship => {
                setData({...data, ...starship, loading: false, error: false})
            }).catch(error => {
                setData({...data, loading: false, error: true})
            })
        }

        updateStarship()
        const planetInterval = setInterval(() => {
            updateStarship()
        }, 3000)

        return () => clearInterval(planetInterval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const {id, name, model, manufacturer, length, passengers} = data;
    const imageUrl = swapi.getStarshipImage(id)

    if (data.loading) {
        return <Loader/>
    }

    if (data.error) {
        return <Error/>
    }

    return (
        <div className="random-starship jumbotron rounded">
            <img className="starship-image" src={imageUrl} alt=""/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Model:</span>
                        <span>{model}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Manufacturer:</span>
                        <span>{manufacturer}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Length:</span>
                        <span>{length}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Passengers:</span>
                        <span>{passengers}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RandomStarship;
