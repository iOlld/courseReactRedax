import React from 'react';
import ReactDom from 'react-dom';

// const el = React.createElement('h1', null, 'Hello world!!!!');
// const el = <h1>Hello World</h1>;
// console.log(el);

const TodoList = () => {

    const items = ['Learn React', 'Build Awesome APP'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px',
    }
    return <input placeholder={searchText}
                    style={searchStyle} />;
};

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