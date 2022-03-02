import {PlanetDetails, Record} from "../planet-detals";
import WithSwapi from "../hoc";


const PlanetDetailss=(props)=>{
    return(
          <PlanetDetails  {...props} >
            <Record label="Population:" fieldName="population"/>
            <Record label="RotationPeriod:" fieldName="rotationPeriod"/>
            <Record label="Diameter:" fieldName="diameter"/>
            <Record label="Climate:" fieldName="climate"/>
            <Record label="Gravity:" fieldName="gravity"/>
            <Record label="Terrain:" fieldName="terrain"/>
        </PlanetDetails>
    )
}
const divideFunc = (swapi) => ({
    getData: swapi.getPlanet,
    getImage: swapi.getPlanetImage
})


export default WithSwapi(PlanetDetailss,divideFunc)