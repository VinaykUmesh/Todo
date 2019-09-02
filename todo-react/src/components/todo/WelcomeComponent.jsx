import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component{
    
    state = {
        welcomeMsg : ''
    }


    render(){
        return <>
            <h2>Welcome</h2>
            <div className="container">
            You can manage your todos by clicking <Link to="/listTodo">here</Link>
            </div>
            <div className="container">
            Click <button onClick={this.retriveMessage} className="btn btn-success">Here</button> to get Welcome Message.
            </div>
            <div className="container">
                {this.state.welcomeMsg}
                </div>
        </>
    }

    retriveMessage(){
        HelloWorldService.retriveMessage()
        .then(response => this.handlerSuccess(response))
    }

    handlerSuccess(response){
        this.setState({
            welcomeMsg : response
        })
    }
}

export default WelcomeComponent;
