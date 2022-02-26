import React, {useContext, useState} from "react";
import ItemList from '../item-list';
import Row from "../row";
import {ItemDetails ,Record} from "../item-details";
import Context from "../swapi-context";




const PeoplePage = () => {
    const [selectedItemId ,setSelectedItemId]=useState(1)
    const swapi=useContext(Context)


    const leftElement=
        <ItemList setSelectedItemId={setSelectedItemId} getData={swapi.getAllPeople}>
            {(item)=>`${item.name}(${item.gender})`}
    </ItemList>
    const rightElement=<ItemDetails selectedItemId={selectedItemId} getData={swapi.getPerson} getImage={swapi.getPersonImage}>
        <Record label="Gender" fieldName="gender"/>
        <Record label="Eye color" fieldName="eyeColor"/>
        <Record label="Birth year" fieldName="birthYear"/>
    </ItemDetails>

    return <Row left={leftElement} right={rightElement}/>
}





export default PeoplePage