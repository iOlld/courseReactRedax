import React, { Component } from 'react';

// импорт bootswatch
import 'bootswatch/dist/darkly/bootstrap.min.css';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

import ErrorIndicator from '../ErrorIndicator';
import PeoplePage from '../PeoplePage';

import ItemList from '../ItemList';
// import PersonDetails from '../PersonDetails';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import ItemDetails, {Record} from '../ItemDetails/ItemDetails';
import SwapiService from '../../services/SwapiService';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true
        })
    };

    render() {

        const { 
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets} = this.swapiService;

        const personDetails = (
            <ItemDetails itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
                <Record field="birthYear" label="Birth Year" />

            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                {/* <Record field="model" label="Model" /> */}
                
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
                <Record field="crew" label="Crew" />
                <Record field="passengers" label="Passengers" />

            </ItemDetails>
        )

        if(this.state.hasError) return <ErrorIndicator />

        return(
            <ErrorBoundry>
                <div className="App">
                    <Header />
                    <RandomPlanet />
                    {/* <PeoplePage /> */}
                    {/* <Row left={personDetails} right={starshipDetails} /> */}
                    <ItemList
                        getData={getAllPeople}
                        onItemSelected={() => {}}>

                        { ({name}) => <span>{name}</span> }
                    </ItemList>

                    <ItemList
                        getData={getAllPlanets}
                        onItemSelected={() => {}}>

                        { ({name}) => <span>{name}</span> }
                    </ItemList>
                </div>
            </ErrorBoundry>
        )
    }
};