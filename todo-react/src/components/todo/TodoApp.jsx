import React, { Component } from 'react'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <LoginComp/>
            </div>
        )
    }
}


class LoginComp extends Component{

    
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
        console.log(this.state)
        if(this.state.username === "umesh" && this.state.password === "pass")
        console.log("successfull")
        else
        console.log("failed")
    }

    render(){
        return <div>
            <showCredentials hasLoginFailed={this.state.hasLoginFailed}/>
            UserName :<input type="text" name="username" value={this.state.username} onChange={this.inputHandler}/>
            Password :<input type="password" name="password" value={this.state.password} onChange={this.inputHandler}/>
            <button onClick={this.whenClicked}>Login</button>
        </div>
    }

    showCredentials=(props)=>{
        return 
    }
    
}



export default TodoApp;