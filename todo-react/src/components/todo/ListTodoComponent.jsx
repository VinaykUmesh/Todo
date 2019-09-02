import React, { Component } from 'react';

class ListTodoComponent extends Component{

    state={
        todos :[
            {id : 1 , description : "Learn Something", done : false, targetDate : new Date()},
            {id : 2 , description : "Do Something with that", done : false, targetDate : new Date()},
            {id : 3 , description : "Get Onsite to someWhere", done : false, targetDate : new Date()},
        ]
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
                            <td>{todos.done.toString()}</td>
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