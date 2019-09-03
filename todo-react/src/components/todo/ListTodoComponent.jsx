import React, { Component } from 'react';
import AuthenticationService from '../../components/todo/AuthenticationService.js';
import TodoDataService from '../../api/todo/TodoDataService.js'

class ListTodoComponent extends Component{

    state={
        todos :[
            
        ]
    }

    componentDidMount(){
        let username = AuthenticationService.fetchUser();

        TodoDataService.fetchAllTodo(username)
            .then(
                response => {
                    this.setState({
                        todos : response.data
                    })
                }
            )
    }

    render(){
        return <div>
            <h1>ListTodo</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>IsCompleted?</th>
                        </tr>
                    </thead>
                    <tbody>
                    {  
                        this.state.todos.map(
                            todos =>  <tr key={todos.id}> 
                            <td>{todos.description}</td>
                            <td>{todos.targetDate.toString()}</td>
                            <td>{todos.completed.toString()}</td>
                            </tr>
                        )
                    } 
                    </tbody>
                </table>
            </div>
        </div>
    }
}

export default ListTodoComponent;