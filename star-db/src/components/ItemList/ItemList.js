import React, { Component } from 'react';

import './ItemList.css';
import { WithData } from '../HocHelpers';
import SwapiService from '../../services/SwapiService';

const ItemList = (props) => {

    const { data, onItemSelected, children: renderLabel } = props;

    const items = data.map((item) => {

        const { id } = item;
        const label = renderLabel(item); // Вызываем "анонимную функцию" в PeoplePage на 39-й строке

        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        );
    });

    return(
        <ul className="ItemList list-group">
            {items}
        </ul>
    )
};

const { getAllPeople } = new SwapiService();

export default WithData(ItemList, getAllPeople);