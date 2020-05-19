import React, { Component } from 'react';

// импорт bootswatch
import 'bootswatch/dist/darkly/bootstrap.min.css';

import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import RandomPlanet from '../RandomPlanet';

import './App.css';

export default class App extends Component {

    render() {
        return(
            <div className="App">
                <Header />
                <RandomPlanet />
    
                <div className="row mb2">
                    {/* <div className="col-md-6"> */}
                    <div className="col-md-6 my-app-correct">
                        <ItemList />
                    </div>
                    {/* <div className="col-md-6"> */}
                    <div className="col-md-6 my-app-correct">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        )
    }
};