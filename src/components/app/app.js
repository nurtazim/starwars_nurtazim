import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";
import SwapiService from "../../services/swapi-service";
import './app.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import RandomStarship from "../starship-random/starship-random";
import RandomPeople from "../people-random/people-random";
import {Provider} from "../swapi-context";

const swapi = new SwapiService()

const App = () => {
    return (
        <div>
            <Router>
                <Provider value={swapi}>
                    <Header/>
                    <Route exact={true} path="/" render={() => <div><RandomPlanet/><PeoplePage/></div>}/>
                    <Route   path="/people/:id?" render={({match }  ) =>{
                        let selectedItemId=match.params.id
                        if (selectedItemId===undefined){
                            selectedItemId="1"
                        }
                        return <div> <RandomPeople/><PeoplePage selectedItemId={selectedItemId}/></div>}}/>
                    <Route  path="/planet/:id?" render={({match} ) =>{
                        let selectedPlanetId=match.params.id
                        if (selectedPlanetId===undefined){
                            selectedPlanetId="1"
                        }
                        return <div><RandomPlanet/> <PlanetPage selectedPlanetId={selectedPlanetId}/></div>
                    }}/>

                    <Route path="/starship/:id?" render={({match}) => {
                        let selectedStarshipId=match.params.id
                        if (selectedStarshipId===undefined){
                            selectedStarshipId="1"
                        }
                        return <div><RandomStarship/> <StarshipPage selectedStarshipId={selectedStarshipId} /></div>}}/>
                </Provider>
            </Router>
        </div>
    );
};

export default App;
