import React from 'react';

// const TodoListItem = (props) => {
//     return <span>{props.label}</span>
// };

const TodoListItem = ( { label, important = false } ) => {

    const style = {
        color: important ? 'tomato' : 'black'
    }

    return <span style={style} >{label}</span>
};

export default TodoListItem;