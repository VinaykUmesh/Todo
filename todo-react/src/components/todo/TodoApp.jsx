import React, { Component } from 'react';
import { BrowserRouter , Route ,Switch, Link} from 'react-router-dom';
import './TodoApp.css';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomePage} />
                        <Route path="/listTodo" component={ListTodo}/>
                        <Route component={ErrorComponent} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

class ListTodo extends Component{

    state={
        todos :[
            {id : 1 , description : "Learn Something", done : false, targetDate : new Date()},
            {id : 2 , description : "Do Something with that", done : false, targetDate : new Date()},
            {id : 3 , description : "Get Onsite to someWhere", done : false, targetDate : new Date()},
        ]
    }

    render(){
        return <div className="loginmsg">
            <h1>ListTodo</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Is Completed?</th>
                    </tr>
                </thead>
                <tbody>
                  
                      {  this.state.todos.map(
                          todos =>  <tr> 
                          <td>{todos.id}</td>
                          <td>{todos.description}</td>
                          <td>{todos.done.toString()}</td>
                          <td>{todos.targetDate.toString()}</td>
                          </tr>
                      )
                        
                      } 
                </tbody>
            </table>
        </div>
    }
}

class ErrorComponent extends Component {
    render() {
        return (
            <div className="loginmsg">
                404 Not Found
            </div>
        )
    }
}


class LoginComponent extends Component{

    
        state = {
            username : '',
            password : '',
            hasLoginFailed : false,
            showSuccessMsg : false,            
        }  
    
    inputHandler=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    whenClicked=(event)=>{
        event.preventDefault()
        console.log(this.state)
        if(this.state.username === "umesh" && this.state.password === "pass"){
            this.props.history.push(`/welcome/${this.state.username}`);
        }
        else{
        this.setState({showSuccessMsg : false, hasLoginFailed:true})
        }
    }

    render(){
        return (<div className="TodoApp">
            {this.state.showSuccessMsg && <div className="loginmsg">Login Successful</div>}
            {this.state.hasLoginFailed && <div className="loginmsg">Invalid Credentials</div>}
            <form onSubmit={this.whenClicked}>
            UserName :<input type="text" name="username" value={this.state.username} onChange={this.inputHandler}/>
            Password :<input type="password" name="password" value={this.state.password} onChange={this.inputHandler}/>
            <button type="submit">Login</button>
            </form>
        </div>)
    }

}

class WelcomePage extends Component{
    render(){
        return <div className="TodoApp">
            Welcome {this.props.match.params.name}. You can manage your todos by clicking <Link to="/listTodo">here</Link>
        </div>
    }
}





export default TodoApp;