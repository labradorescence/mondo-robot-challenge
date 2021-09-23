import React from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import SignUp from './components/SignUp';
import Login from './components/Login';
import RobotCollection from './components/RobotCollection';
import ResultCollection from './components/ResultCollection';
import Admin from './components/Admin';
import './App.css';
import HeaderNav from './components/HeaderNav'


class App extends React.Component{

  state = {
    currentUser: null,
    robot: []
  }



  componentDidMount() { //life cycle: mounting, when the APP is running, mount this.
      // get user detail and sent it to handleLogin
      const getUserDetails = () => {

      fetch(`https://mondo-robot-art-api.herokuapp.com/auth/session`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(r => r.json())
        .then(user => {
            // check for errors (could also check the status code of the response)
            // and set current user in state
            this.handleLogin(user, localStorage.getItem("token"))
        })
        .catch(error => console.log(error))  
      }


    
      const getRobot = () => {
        fetch(`https://mondo-robot-art-api.herokuapp.com/robots`, {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })
          .then(r => r.json())
          .then(robotData => {
              this.handleRobot(robotData)
          })
          .catch(error => console.log(error))
      }
     
      
      //if the user is logged in (if there's a token value), then run getUserDetail and getRobot
      if (localStorage.getItem("token")) { 
          getUserDetails()
  
         getRobot()
        }
      
      } //end of ComponentDIDMOUNT



      
  handleLogin = (currentUser, token) => { 
    // set current user, then redirect to home page

    this.setState({ currentUser }, () => {
      localStorage.setItem("token", token) //Initiate token in the localStorage
      this.props.history.push('/robot') //redirect: update the url to home 
    })
  }

  handleLogout = () => {
    // remove the userId from localstorage
    localStorage.removeItem("token")
    // and clear the user in state
    this.setState({ currentUser: null}, () => {
      this.props.history.push('/login')
    })
  }


  handleRobot = (robot) => {
    this.setState({robot}, () => {
      //this.props.history.push('/robot')
    })
  }

  

  render(){

    return (
   
      <div>
        
          <HeaderNav currentUser = {this.state.currentUser}
                     handleLogout = {this.handleLogout}/>


          <Switch>

              <Route path="/signup">
                <SignUp handleLogin={this.handleLogin} />
              </Route> 

              <Route path="/login">
                <Login handleLogin={this.handleLogin} />
              </Route> 

              <Route path="/robot" exact>
                {this.state.currentUser ?  <RobotCollection  robot = {this.state.robot} /> : <Redirect to='/' />}     
              </Route>

              <Route path="/result" exact>
                <ResultCollection  robot = {this.state.robot}/>
              </Route>
              
              <Route path="/admin" exact >
                {this.state.currentUser && this.state.currentUser.email === "admin@mondorobot.com" ? <Admin robot = {this.state.robot}/> : <Redirect to='/login' />}       
              </Route>

              <Route path="/">
              </Route>

          </Switch>
        
      </div>
  )}

}

export default withRouter(App);