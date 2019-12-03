import React from 'react';

const Todo = props => {
    const handleClick = event => {
        event.preventDefault();
        props.toggleCompleted(props.todo.id);
        console.log('clicked')
    }
    
    return (
        <div className={props.todo.completed ? ' done' : ''}>
            <p onClick={handleClick}>{props.todo.task}</p>
        </div>
    )
}

export default Todo;