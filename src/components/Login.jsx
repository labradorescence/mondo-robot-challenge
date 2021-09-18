import React from 'react';

class Login extends React.Component {
    
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
            this.props.handleLogin({ name: this.state.name, 
                                    email: this.state.email, 
                                    password: this.state.password }, token)
        })
        .catch(error => console.log('error', error));
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit}>
                
                <h1>Login</h1>

                <label>Email</label>
                
                <input 
                    type="text" 
                    name="email" 
                    autoComplete="off" 
                    value = {this.state.email} 
                    onChange={this.handleChange} 
                />
                
                <label>Password</label>
                
                <input 
                    type="password" 
                    name="password" 
                    value = {this.state.password} 
                    onChange={this.handleChange} 
                    autoComplete="current-password" 
                />
                
                <input type="submit" value="Login" />
            </form>
        )
    }
}

export default Login