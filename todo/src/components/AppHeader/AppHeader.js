import React from 'react';

import './AppHeader.css';

const AppHeader = ({toDo, done}) => {
    return (
        <div className="AppHeader d-flex my-d-flex">
            <h1>Список дел</h1>
            <h2>{toDo} нужно сделать&nbsp;</h2>
            <h2>{done} сделано</h2>
        </div>
    );
};

export default AppHeader;