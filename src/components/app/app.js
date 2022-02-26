import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";
import SwapiService from "../../services/swapi-service";
import './app.css';
import Context from "../swapi-context";
import {Route, Switch} from "react-router-dom";
import RandomStarship from "../starship-random/starship-random";

const swapi = new SwapiService()

const App = () => {
    return (
        <div>
            <Switch>
                <Context.Provider value={swapi}>
                    <Route exact path="/" component={() => <div><Header/><RandomPlanet/><PeoplePage/></div>}/>
                    <Route exact path="/people" component={() => <div><Header/> <PeoplePage/></div>}/>
                    <Route exact path="/planet" component={() => <div><Header/> <RandomPlanet/> <PlanetPage/></div>}/>
                    <Route exact path="/starship" component={() => <div><Header/><RandomStarship/> <StarshipPage/></div>}/>
                </Context.Provider>
            </Switch>
        </div>
    );
};

export default App;
