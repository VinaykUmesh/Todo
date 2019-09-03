import React, { Component } from 'react';
import AuthenticationService from '../../components/todo/AuthenticationService.js';
import TodoDataService from '../../api/todo/TodoDataService.js'

class ListTodoComponent extends Component{

    state={
        todos :[],
        message : null
    }

    componentDidMount(){
        this.refreshTodo()
    }

    refreshTodo=()=>{
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

    deleteTodoById=(id)=>{
        let username = AuthenticationService.fetchUser();
        
        TodoDataService.deleteTodoById(username,id)
            .then(
                response => {
                    this.setState({
                        message : `Delete of todo ${id} is Successful`
                    })
                    this.refreshTodo()
                }
            )

    }

    updateTodoById=(id)=>{
        this.props.history.push(`/todos/${id}`)
    }

    render(){
        return <div>
            <h1>ListTodo</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>IsCompleted?</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {  
                        this.state.todos.map(
                            todos =>  <tr key={todos.id}> 
                            <td>{todos.description}</td>
                            <td>{todos.targetDate.toString()}</td>
                            <td>{todos.completed.toString()}</td>
                            <td><button className="btn btn-success" onClick={()=> this.updateTodoById(todos.id)}>Update</button></td>
                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoById(todos.id)}>Delete</button></td>
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