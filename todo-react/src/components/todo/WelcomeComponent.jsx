import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component{

        state = {
            welcomeMsg: ''
        }
 
    render(){
        return <>
            <h2>Welcome</h2>
            <div className="container">
            You can manage your todos by clicking <Link to="/todos">here</Link>
            </div>
            <div className="container">
            Click <button onClick={this.retriveMessage} className="btn btn-success">Here</button> to get Welcome Message.
            </div>
            <div className="container">
                {this.state.welcomeMsg}
            </div>
        </>
    }

    retriveMessage=()=>{
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handlerSuccess(response.data.message))

        // HelloWorldService.executeHelloWorldServiceBean()
        // .then(response => this.handlerSuccess(response.data.message))
       
        HelloWorldService.executeHelloWorldServicePathVariable(this.props.match.params.name)
            .then(response => this.handlerSuccess(response.data.message))
            //.catch(error => this.handlerError(error.response.data.message))
    }
    
    handlerError=(error)=>{
         this.setState({
             welcomeMsg : error
         })
    }

    handlerSuccess=(response)=>{
        this.setState({
            welcomeMsg : response
        })
    }
}

export default WelcomeComponent;
