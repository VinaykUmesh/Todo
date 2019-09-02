import React , { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';


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

export default LoginComponent;
