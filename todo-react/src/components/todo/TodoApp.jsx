import React, { Component } from 'react';
import { BrowserRouter , Route ,Switch, Link} from 'react-router-dom';
import './TodoApp.css';
import AuthenticationService from './AuthenticationService.js';


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <BrowserRouter>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/welcome/:name" component={WelcomePage} />
                            <Route path="/listTodo" component={ListTodo}/>
                            <Route path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent} />
                        </Switch>
                    <FooterComponent/>
                </BrowserRouter>
            </div>
        )
    }
}

class HeaderComponent extends Component{
    render(){
            const isLoggedIn = AuthenticationService.isUserLogged;
               console.log(isLoggedIn); 
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="https://wwww.github.com/VinaykUmesh">Keeps</a></div>
                    <ul className="navbar-nav ">
                        <li><Link className="nav-link" to="/welcome/:name">Home</Link></li>
                        <li><Link className="nav-link" to="/listTodo">Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">LogIn</Link></li>
                        <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>LogOut</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component{
    render(){
        return (
           <footer>
               <span className="text-muted">All Rights Reserved @VinaykUmesh</span>
           </footer>
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
        return <div>
            <h1>ListTodo</h1>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                        </tr>
                    </thead>
                    <tbody>
                    {  
                        this.state.todos.map(
                            todos =>  <tr> 
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
        if(this.state.username === "umesh" && this.state.password === "pass"){
            AuthenticationService.registerLoginSuccessful(this.state.username)
            this.props.history.push(`/welcome/${this.state.username}`);
        }
        else{
        this.setState({showSuccessMsg : false, hasLoginFailed:true})
        }
    }

    render(){
        return (
            <>
                <h2 className="TodoApp">Login</h2>
                <div className="container">
                    {this.state.showSuccessMsg && <div className="loginmsg">Login Successful</div>}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                        <div className="card-body">            
                                <form onSubmit={this.whenClicked}>
                                    <div className="form-group">
                                        <label className="form-label">UserName :</label>
                                        <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.inputHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Password :</label>
                                        <input type="password" name="password" value={this.state.password} placeholder="password" onChange={this.inputHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit">Login</button>
                                    </div>                         
                            </form>
                        </div>
                </div>
             </>
        )
    }

}

class LogoutComponent extends Component{
    render(){
        return (
            <>
                <h2>You Are Logged Out</h2>
                <div className="container">
                    Thanks for using our Application.
                </div>
            </>
        )
    }
}

class WelcomePage extends Component{
    render(){
        return <>
            <h2>Welcome</h2>
            <div className="container">
            You can manage your todos by clicking <Link to="/listTodo">here</Link>
            </div>
        </>
    }
}





export default TodoApp;