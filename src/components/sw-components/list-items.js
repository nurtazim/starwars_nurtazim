import ItemList from "../item-list";
import React  from "react";
import WithSwapi from "../hoc";




const dividePeopleFunc = (swapi) => ({
    getData:swapi.getAllPeople

})
const PeopleList = (props) => {
    return (
        <ItemList {...props}>
{(item)=>item.name}
    </ItemList>)
}


//
// const PeopleList= WithSwapi(<ItemList >
//     {(item)=>item.name}
//  </ItemList>,(swapi)=>({
//     getData:swapi.getAllPeople
// }))

export default WithSwapi(PeopleList ,dividePeopleFunc);

