import React, { Component } from 'react';

import './PeoplePage.css';

import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();
    
    state = {
        selectedPerson: 3,
        hasError: false
    };
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    };

    render() {

        if(this.state.hasError) return <ErrorIndicator />

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPeople}>{
                (i) => (
                    `${i.name} (${i.birthYear})`
                )
            }</ItemList>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        )

        return (
            <Row left={itemList} right={personDetails} />
        );
    };

};