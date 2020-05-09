import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

// todos получаем с помощью деструктуризации, вместо props.todos пишем { todos }
const TodoList = ( { todos } ) => {

    const elements = todos.map((item) => {

        // деструктурируем todos, достаем id из todos, создаем новый объект itemProps, передаем в него label и important
        const { id, ...itemProps } = item;

        return (
            // <li key={item.id} ><TodoListItem label={itemProps.label} important={itemProps.important} /></li>
            // spread оператор для объекта, запись аналогична записи выше, но в разы меньше
            <li key={item.id} className="list-group-item" >
                <TodoListItem {...itemProps} />
            </li>
        )
    })

    return (
        <ul className="list-group TodoList">
            {elements}
        </ul>
    );
};

export default TodoList;