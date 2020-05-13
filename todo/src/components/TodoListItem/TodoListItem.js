import React, { Component } from 'react';
import './TodoListItem.css'


export default class TodoListItem extends Component {
    
    render () {
        /**
         * Деструктурируем получаемые props
         */
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

        let classNames = 'TodoListItem';
        if (done) classNames += ' done';
        if (important) classNames += ' important';

        return (
            <span className={classNames}>
                <span
                    className="TodoListItem-label"
                    onClick={ onToggleDone }
                    >
                    {label}
                </span>

                <div className="float-right">
                    <button type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={ onToggleImportant }>
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