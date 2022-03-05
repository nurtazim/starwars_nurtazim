import ItemList from "../item-list";
import React from "react";
import WithSwapi from "../hoc";


const WichRenderFunc = (View, renderFunc) => {
    return (props) => {
        return <View {...props}>{renderFunc}</View>
    }
}
// const dividePeopleFunc = (swapi) => ({
//     getData:swapi.getAllPeople
//
// })
// const PeopleList = (props) => {
//     return (
//         <ItemList {...props}>
// {(item)=>item.name}
//     </ItemList>)
// }


const PeopleList =
    WithSwapi(WichRenderFunc(ItemList,(item)=>item.name), swapi => ({
        getData: swapi.getAllPeople
    }))

export default PeopleList

