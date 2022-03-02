import {ItemDetails, Record} from "../item-details";
import React from "react";
import WithSwapi from "../hoc";


const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record label="Birth year:" fieldName="birthYear"/>
            <Record label="Gender:" fieldName="gender"/>
            <Record label="Height:" fieldName="height"/>
            <Record label="Mass:" fieldName="mass"/>
            <Record label="Eye color:" fieldName="eyeColor"/>
            <Record label="Skin_color:" fieldName="height"/>
        </ItemDetails>

    )

}

const divideFunc = (swapi) => ({
    getData: swapi.getPerson,
    getImage: swapi.getPersonImage
})


export default WithSwapi(PersonDetails,divideFunc)