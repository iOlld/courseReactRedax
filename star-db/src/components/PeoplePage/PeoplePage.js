import React, { Component } from 'react';

import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
// import PersonDetails from '../PersonDetails';
// import ErrorIndicator from '../ErrorIndicator';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

import './PeoplePage.css';

export default class PeoplePage extends Component {

    swapiService = new SwapiService();
    
    state = {
        selectedPerson: 1
    };
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        // if(this.state.hasError) return <ErrorIndicator />

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPeople}>
                {(i) => ( // Обращаемся к функции через "this.props.children" в ItemList на 29-й строке
                    `${i.name} (${i.birthYear})`
                )}
            </ItemList>
        );

        const personDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson}
                    getData={this.swapiService.getPerson} />
                {/* <PersonDetails personId={this.state.selectedPerson} /> */}
            </ErrorBoundry>
        )

        return (
            <Row left={itemList} right={personDetails} />
        );
    };

};