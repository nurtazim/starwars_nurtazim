import React, {useEffect, useState} from 'react';
import  "./starship-detals.css"

const Record = ({label, fieldName, data}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span >{data[fieldName]}</span>
        </li>

    )
}

const StarshipDetails = ({selectedStarshipId, getData, getImage, children}) => {
    const [data, setData] = useState({})
    // const swapi = useContext(Context)

    useEffect(() => {
            getData(selectedStarshipId).then(data => setData(data)).catch(
                error => error)
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [selectedStarshipId])

    const {id, name  } = data
    const imageUrl = getImage(id)

    return (
        <div className="item-details card">
            <img className="item-image" src={imageUrl}/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children, (record) => {
                            const newRecord=React.cloneElement(record, {data: data})
                            return newRecord
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


export   {StarshipDetails, Record};
