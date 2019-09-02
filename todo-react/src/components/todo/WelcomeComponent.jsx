import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class WelcomeComponent extends Component{
    render(){
        return <>
            <h2>Welcome</h2>
            <div className="container">
            You can manage your todos by clicking <Link to="/listTodo">here</Link>
            </div>
            <div className="container">
            Click <button onClick={this.retriveMessage} className="btn btn-success">Here</button> to get Welcome Message.
            </div>
        </>
    }
}

export default WelcomeComponent;
