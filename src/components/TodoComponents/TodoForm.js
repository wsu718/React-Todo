import React from 'react';

class TodoForm extends React.Component {
    
    constructor(){
        super();
        this.state = {
            newTodo: ''
        };
    };

    handleChanges = event => {
        this.setState({newTodo: event.target.value});
        // console.log(event.target.value);
    }

    handleSubmit = event => {
        console.log('submit pressed');
        event.preventDefault();
        
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo: ''});
    }



    render () {
        return (
            <div>
                {/* <label>
                    Input:
                    <input onChange={this.handleChanges}/>
                </label>
                <button onClick={this.handleSubmit}>Add todo</button>
                <button>Clear completed</button> */}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Input:
                        <input 
                            onChange={this.handleChanges}
                            value={this.state.newTodo}
                            type="text"
                            name="todo"
                        />
                    </label>
                    <button>Add todo</button>
                </form> 
                
                    <button onClick={this.props.clearComplete}>Clear completed</button>    
                
            </div>
        )
    }
};

export default TodoForm;