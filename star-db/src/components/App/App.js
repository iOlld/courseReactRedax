import React, { Component } from 'react';

// импорт bootswatch
import 'bootswatch/dist/darkly/bootstrap.min.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import './App.css';
import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage';

export default class App extends Component {

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