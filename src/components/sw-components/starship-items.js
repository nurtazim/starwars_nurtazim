
import StarshipList from "../starship-list/starship-list";
import WithSwapi from "../hoc";


const dividePeopleFunc = (swapi) => ({
    getData:swapi.getAllStarships

})
const StarshipListt = (props) => {
    return (
        <StarshipList {...props}>
{(item)=>item.name}
    </StarshipList>)
}


//
// const PeopleList= WithSwapi(<ItemList >
//     {(item)=>item.name}
//  </ItemList>,(swapi)=>({
//     getData:swapi.getAllPeople
// }))

export default WithSwapi(StarshipListt ,dividePeopleFunc);