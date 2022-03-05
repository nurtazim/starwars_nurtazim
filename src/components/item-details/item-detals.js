import React, { useEffect, useState} from 'react';
import './item-details.css';



const Record = ({label, fieldName, data}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{data[fieldName]}</span>
        </li>

    )
}

const ItemDetails = ({selectedItemId, getData, getImage, children}) => {
    const [data, setData] = useState({})
    // const swapi = useContext(Context)

    useEffect(() => {
            getData(selectedItemId).then(data => setData(data)).catch(
                error => error)
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [selectedItemId])

    const {id, name} = data
    const imageUrl = getImage(id)

    return (
        <div className="item-details card">
            <img className="item-image" src={imageUrl}/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(children,(record)=>{
                            return React.cloneElement(record,{data:data})
                        })
                    }
                </ul>
            </div>
        </div>
    )
}


export {ItemDetails ,Record};

