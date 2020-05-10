import React, { Component } from 'react';
import './TodoListItem.css'


export default class TodoListItem extends Component {

    constructor() {
        super();
        this.state = {
            done: false,
            important: false,
        }
    }

    onLabelClick = () => {
        this.setState( (state) => {
            return {
                done: !state.done
            };
        } );
    };

    /**
     * Ниже такой же код как и верхний только с использованием деструктуризации
     * это чтоб ты Жека не запутался))))
     * ну в смысле функция onLabelClick и onMarkImportant
     * смена состояния
     */

    onMarkImportant = () => {
        this.setState( ( { important } ) => {
            return {
                important: !important
            };
        } );
    };

    render () {
        /**
         * Деструктурируем получаемые props
         */
        const { label, onDeleted } = this.props;
        const { done, important } = this.state;
        let classNames = 'TodoListItem';
        if (done) classNames += ' done';
        if (important) classNames += ' important';

        return (
            <span className={classNames}>
                <span
                    className="TodoListItem-label"
                    onClick={ this.onLabelClick }
                    >
                    {label}
                </span>

                <div className="float-right">
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={this.onMarkImportant}>
                        <i className="fa fa-exclamation" />
                    </button>
            
                    <button type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={onDeleted}>
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </span>
        );
    }
}