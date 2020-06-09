import React, { Component } from 'react';

// импорт bootswatch
import 'bootswatch/dist/darkly/bootstrap.min.css';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage';

// import ItemList from '../ItemList';
// import PersonDetails from '../PersonDetails';
import SwapiService from '../../services/SwapiService';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true
        })
    }

    render() {

        if(this.state.hasError) return <ErrorIndicator />

        return(
            <div className="App">
                <Header />
                <RandomPlanet />
                <PeoplePage />
                
            </div>
        )
    }
};