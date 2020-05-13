import React from 'react';
import TodoListItem from '../TodoListItem';
import './TodoList.css';

// todos получаем с помощью деструктуризации, вместо props.todos пишем { todos }
const TodoList = ( { todos, onDeleted, onToggleImportant, onToggleDone } ) => {

    const elements = todos.map((item) => {

        // деструктурируем todos, достаем id из todos, создаем новый объект itemProps, передаем в него label и important
        const { id, ...itemProps } = item;

        return (
            // <li key={item.id} ><TodoListItem label={itemProps.label} important={itemProps.important} /></li>
            // spread оператор для объекта, запись аналогична записи выше, но в разы меньше
            <li key={id} className="list-group-item" >
                <TodoListItem 
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)} />
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