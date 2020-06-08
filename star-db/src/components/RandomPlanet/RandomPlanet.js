import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';

import './RandomPlanet.css';

import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    }

    onPlanetLoaded = (planet) => {
        this.setState( { 
            planet,
            loading: false,
        } );
    };

    onError = (err) => {
        this.setState( {
            error: true,
            loading: false,
        } )
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 15) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.updatePlanet();
        // setInterval( this.updatePlanet, 3000); // ???
        this.interval = setInterval( this.updatePlanet, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const errorMassege = error ? <ErrorIndicator /> : null ;
        const spinner = loading ? <Spinner /> : null ;
        const content = hasData ? <PlanetView planet={planet} /> : null ;

        return (
            <div className="RandomPlanet jumbotron rounded">
                {errorMassege}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ( { planet } ) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                alt={name} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter} </span>
                    </li>
                </ul>
        </div>
        </React.Fragment>
    )
}