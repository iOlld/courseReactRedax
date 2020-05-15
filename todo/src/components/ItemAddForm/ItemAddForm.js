import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {

    constructor() {
        super();
        this.state = {
            label: '',
            placeholder: 'Что нужно сделать',
        }
    }

    onLabelChange = (event) => {
        this.setState({label: event.target.value});
    }

    // добавил проверку на пустое поле ввода
    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.label.trim() !== '') {
            this.props.onItemAdded(this.state.label);
            this.setState({label: ''});
            this.setState( { placeholder: 'Что нужно сделать' } );
        } else {
            this.setState( { placeholder: 'Нужно заполнить поле' } );
        }
    }

    render () {

        const { label, placeholder } = this.state;

        return (
            <form className="ItemAddForm d-flex"
                    onSubmit={this.onSubmit}>

                <input type="text"
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder={placeholder}
                        // placeholder="Whats needs to be done"
                        value={label}/>
                <div>
                    <button className="btn btn-outline-secondary" >
                        ADD
                    </button>
                </div>
            </form>
        )
    }
}