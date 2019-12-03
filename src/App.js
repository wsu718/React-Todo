import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import './components/TodoComponents/Todo.css';

const todos = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: true
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  };

  addTodo = newTodoTask => {
    const newTodo = {
      task: newTodoTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleCompleted = (todoId) => {
  
    console.log(this.state.todos)
    
    const todos = this.state.todos.map(todo =>  {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    });
    this.setState({todos, todo: ''})

  }
  
  clearComplete = event => {
    event.preventDefault();
    this.setState(prevState => {
        return {
            todos: prevState.todos.filter(todo => {
                return !todo.completed;
            })
        }
    })
}

  render() {
    return (
      <div className="container">
        <h2>Your Todos</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo} clearComplete={this.clearComplete}/>
        
      </div>
    );
  }
}

export default App;
