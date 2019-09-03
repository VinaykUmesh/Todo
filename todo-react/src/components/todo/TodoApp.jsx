import React, { Component } from 'react';
import { BrowserRouter , Route ,Switch } from 'react-router-dom';
import './TodoApp.css';
import HeaderComponent from './HeaderComponent.jsx';
import LoginComponent from './LoginComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ListTodoComponent from './ListTodoComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import AuthenticationRoute from './AuthenticationRoute.jsx';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <BrowserRouter>
                    <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticationRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticationRoute path="/listTodo" component={ListTodoComponent}/>
                            <AuthenticationRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent} />
                        </Switch>
                    <FooterComponent/>
                </BrowserRouter>
            </div>
        )
    }
}

export default TodoApp;
