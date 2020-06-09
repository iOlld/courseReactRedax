import React from 'react';

import './Row.css';

const Row = ({ left, right }) => {
    return (
        <div className="row mb2">
            <div className="col-md-6 my-app-correct">
                {left}
            </div>
            <div className="col-md-6 my-app-correct">
                {right}
            </div>
        </div>
    );
};

export default Row;