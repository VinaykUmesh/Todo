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
        event.preventDefault()
        console.log(this.state)
        if(this.state.username === "umesh" && this.state.password === "pass"){
        console.log("successfull")
        this.setState({showSuccessMsg:true,hasLoginFailed:false})
        
        }
        else{
        this.setState({showSuccessMsg : false, hasLoginFailed:true})
        }
    }

    render(){
        return (<div>
            <ShowCredentials hasLoginFailed={this.state.hasLoginFailed}/>
            <ShowLoginSucess showSuccessMsg={this.state.showSuccessMsg}/>
            <form onSubmit={this.whenClicked}>
            UserName :<input type="text" name="username" value={this.state.username} onChange={this.inputHandler}/>
            Password :<input type="password" name="password" value={this.state.password} onChange={this.inputHandler}/>
            <button type="submit">Login</button>
            </form>
        </div>)
    }

}

function ShowCredentials(props){
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div>
    }
    else{
        return null;
    }
}

function ShowLoginSucess(props){
    if(props.showSuccessMsg){
        return <div>
            Login Sucessful
        </div>
    }else{
        return null;
    }
}



export default TodoApp;