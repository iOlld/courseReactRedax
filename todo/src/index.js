import React from 'react';
import ReactDom from 'react-dom';

import AppHeader from './components/AppHeader/AppHeader';
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {

    return (
        <div>
            <span> {(new Date()).toLocaleString()} </span>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('root'));