import React from 'react';
import { Link } from 'react-router-dom';

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
            <main className = "login-main">
                <section className="login">
                    <logo className="login-logo-box"> <img src="/rectangle2.png"  alt="logo" className="login-logo"/> </logo>
                    <form onSubmit = {this.handleSubmit}>
                        
                        <section className="email-box">
                        <label className="email-label">Email</label> 
                        <input 
                            type="text" 
                            name="email" 
                            autoComplete="off" 
                            value = {this.state.email} 
                            onChange={this.handleChange} 
                            className="email-input"
                        />
                        </section>

                        <section className="pw-box">
                        <label className="pw-label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            value = {this.state.password} 
                            onChange={this.handleChange} 
                            autoComplete="current-password" 
                            className="pw-input"
                        />
                        </section>
                        
                        <input type="submit" value="Login" className="login-btn"/>
                    </form>
                    <Link to ="/signup" > <button className="signup-btn"> Register </button> </Link> 
                </section>
            </main>
        )
    }
}

export default Login