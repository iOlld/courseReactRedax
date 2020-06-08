import React, { Component } from 'react';

import './PeoplePage.css';

import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';

export default class PeoplePage extends Component {

    
    state = {
        selectedPerson: 3,
        hasError: false
    }
    
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    // componentDidCatch(error, info) {
    //     debugger;
    //     this.setState({
    //         hasError: true
    //     })
    // }

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

        if(this.state.hasError) return <ErrorIndicator />

        return (
            <div className="row mb2">
                {/* <div className="col-md-6"> */}
                <div className="col-md-6 my-app-correct">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                {/* <div className="col-md-6"> */}
                <div className="col-md-6 my-app-correct">
                    <PersonDetails personId={this.state.selectedPerson} />
                </div>
            </div>
        );
    };

};