import React, { Component } from 'react';

import "./SearchPanel.css";

export default class SearchPanel extends Component {

    constructor() {
        super();
        this.state = {
            term: '',
        }
    }

    onSearchChange = (event) => {
        const term = event.target.value;
        this.setState( { term } );
        this.props.onSearchChange(term);
    }
    
    render() {
        return <input className="form-control search-input"
                        type="text"
                        placeholder="Поиск по названию"
                        // placeholder="Type here to search"
                        value={this.state.term}
                        onChange={this.onSearchChange} />;

    }
};