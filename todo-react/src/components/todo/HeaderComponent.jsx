import React,{ Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import AuthenticationService from './AuthenticationService.js';


class HeaderComponent extends Component{
    render(){
            const isLoggedIn = AuthenticationService.isUserLogged();
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand" href="https://wwww.github.com/VinaykUmesh">Keeps</a></div>
                    <ul className="navbar-nav ">
                        {isLoggedIn && <li><Link className="nav-link" to="/welcome/:name">Home</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/listTodo">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isLoggedIn && <li><Link className="nav-link" to="/login">LogIn</Link></li>}
                        {isLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>LogOut</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
