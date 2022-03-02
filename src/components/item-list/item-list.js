import React, {useEffect, useState, useContext} from 'react';
import './item-list.css';
import WithSwapi from "../hoc";


const ItemList = ({ swapi ,setSelectedItemId ,getData ,children}) => {
    const [data, setData] = useState([])


    useEffect(()=> {
        getData().then(data => setData(data)).catch(error => error)
    },[])

    const elements = data.map((person) => {

        return (<li
            key={person.id}
            className="list-group-item"
            onClick={() => setSelectedItemId(person.id)}>
            {children(person)}
        </li>)
    })

    return (
        <ul className="item-list list-group">{elements}</ul>
    );
}


const divideFunc=(swapi)=>({
    getData:swapi.getAllPeople
})
export default WithSwapi(ItemList ,divideFunc);


