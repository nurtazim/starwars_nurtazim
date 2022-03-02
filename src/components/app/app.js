import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";
import SwapiService from "../../services/swapi-service";
import './app.css';

import {Route, Switch} from "react-router-dom";
import RandomStarship from "../starship-random/starship-random";
import RandomPeople from "../people-random/people-random";
import {Provider} from "../swapi-context";

const swapi = new SwapiService()

const App = () => {
    return (
        <div>
            <Switch>
                <Provider value={swapi}>
                    <Route exact path="/" component={() => <div><Header/><RandomPlanet/><PeoplePage/></div>}/>
                    <Route exact path="/people" component={() => <div><Header/> <RandomPeople/><PeoplePage/></div>}/>
                    <Route exact path="/planet" component={() => <div><Header/> <RandomPlanet/> <PlanetPage/></div>}/>
                    <Route exact path="/starship" component={() => <div><Header/><RandomStarship/> <StarshipPage/></div>}/>
                </Provider>
            </Switch>
        </div>
    );
};

export default App;
