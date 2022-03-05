import React, {useState, useEffect, useContext} from 'react';

import "./people-random.css"

import  {Consumer} from "../swapi-context";

const Loader = () => <h1>Loading...</h1>
const Error = () => <h1>Something went wrong...</h1>


const RandomPeople = () => {
    const [data, setData] = useState({
        loading: true,
        error: false,
    })
    const swapi = useContext(Consumer)

    useEffect(() => {
        const updatePeople = () => {
            const id = Math.floor(Math.random() * (18 - 1) +1);
            swapi.getPerson(id).then(starship => {
                setData({...data, ...starship, loading: false, error: false})
            }).catch(error => {
                setData({...data, loading: false, error: true})
            })
        }

        updatePeople()
        const planetInterval = setInterval(() => {
            updatePeople()
        }, 3000)

        return () => clearInterval(planetInterval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // name: person.name,
    //   gender: person.gender,
    //   birthYear: person.birth_year,
    //   eyeColor: person.eye_color

    const {id, name, gender, birthYear, eyeColor } = data;
    const imageUrl = swapi.getPersonImage(id)

    if (data.loading) {
        return <Loader/>
    }

    if (data.error) {
        return <Error/>
    }

    return (
        <div className="random-people jumbotron rounded">
            <img className="people-image" src={imageUrl} alt=""/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender:</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">BirthYear:</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">EyeColor:</span>
                        <span>{eyeColor}</span>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default RandomPeople;
