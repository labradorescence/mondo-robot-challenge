import React from 'react';

class SignUp extends React.Component {
    
    state = {
        name: "",
        email: "",
        password: ""
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        
        e.preventDefault()
        
        fetch("https://mondo-robot-art-api.herokuapp.com/auth/register", {
            method: "POST",
            headers: {
                'x-robot-art-api-key': '3d100850f7f996899c4b3a9492aa0017',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },          
            body: JSON.stringify(this.state)
            })
            
            .then(r => r.json())
            .then(user => {

                fetch("https://mondo-robot-art-api.herokuapp.com/auth/session", {
                    method: 'POST',
                   headers: {
                    'x-robot-art-api-key': '3d100850f7f996899c4b3a9492aa0017',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    },   
                    body: JSON.stringify(this.state)
            
                  })
                .then(response => response.json())
                .then(data => {
                    const { token } = data

                    debugger
                    
                    this.props.handleLogin(this.state, token) 
                })
                .catch(error => console.log('error', error));
                })

                //sending this.state, the input data to handleLogin 
                // this.props.handleLogin(user) //prop from app.js
            .catch(error => console.log("error", error));
            
    }

    render(){
        
        const { name, email, password } = this.state

        return (

            <form onSubmit = {this.handleSubmit}>
            
                <logo> MONDO ROBOT LOGO </logo>

                <label> Full Name </label>
                
                <input
                    type = "text"
                    name = "name"
                    autoComplete = "off"
                    value = {name}
                    onChange = {this.handleChange}
                />

                <label> Email </label>
                <input
                    type = "text"
                    name = "email"
                    autoComplete = "off"
                    value = {email}
                    onChange = {this.handleChange}
                />

                <label> Password </label>
                <input
                    type = "password"
                    name = "password"
                    autoComplete = "current-password"
                    value = {password}
                    onChange = {this.handleChange}
                />

                <input type="submit" value="Register" />
                
                <button>Back to Login</button>

            </form>
        )
    }
}

export default SignUp