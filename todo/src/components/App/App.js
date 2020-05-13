import React, { Component } from 'react';

import AppHeader from '../AppHeader'
import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

import './App.css';

export default class App extends Component {
    
    maxId = 1;
    constructor() {
        super();
        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have a lunch'),
            ],
            term: '',
            filter: 'all',
        };
    }

    // создание элемента
    createTodoItem = (label) => {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    // удаление элемента
    deleteItem = (id) => {
        this.setState( ( { todoData } ) => {
            const idx = todoData.findIndex( (el) => el.id === id );

            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }
        } )
    };

    // добавление элемента
    addItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            };
        });
    }

    // добавление свойства
    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex( (el) => el.id === id );
        // 1. update object
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName] };
        // 2. construct new array
        return [
            ...arr.slice(0, idx), 
            newItem,
            ...arr.slice(idx + 1),
        ];
    }

    // добавление свойства important
    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {todoData: this.toggleProperty(todoData, id, 'important')}
        })
    }

    // добавление свойства done
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {todoData: this.toggleProperty(todoData, id, 'done')}
        });
    };

    // вывод отфильтрованных значений
    onSearchChange = (term) => {
        this.setState( { term } );
    };
    // все, активные или выполненные
    onFilterChange = (filter) => {
        this.setState( { filter } );
    };

    // поиск фильтрация вводимых значений
    search = (items, term) => {

        if(term.length === 0) return items;

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
            // return item.label.toLowerCase().trim().indexOf(term.toLowerCase().trim()) > -1;
        });
    };

    filter = (items, filter) => {

        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }

    }

    render() {

        const { todoData, term, filter } = this.state;

        // поиск
        const visibleItems = this.filter(this.search(todoData, term), filter);
        // выполненные задачи
        const doneCount = todoData.filter((element) => element.done).length;

        // не выполненные задачи
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter filter={filter}
                                        onFilterChange={this.onFilterChange} />
                </div>
    
                {/* todoData передается как props классу TodoList */}
                <TodoList 
                    todos={visibleItems}
                    // todos={todoData}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}/>
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
};