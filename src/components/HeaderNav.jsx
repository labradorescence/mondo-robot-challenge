import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Login from "./Login";
import SignUp from "./SignUp";

const HeaderNav = ( {currentUser, handleLogout}) => {
  // const [toggle, toggleNav] = useState(false);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const hamburger = document.querySelector(".hamburger");

  const navMenu = document.querySelector(".nav");

  const mobileMenu = () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  if( currentUser && currentUser.email === "admin@mondorobot.com" ){ //admin
    return(
    <header className="header">
    <nav className = "nav">

        
            <Link to ="/robot" className="logo-box"> <img src="/rectangle.png"  alt="logo" className="logo"/> </Link>
            
            <ul className="nav-left">
                <Link to ="/robot" className="robots">Robots</Link>
                <Link to="/result" className="results">Results</Link>
            </ul>

            <ul className="nav-right">
              <Link to="/admin" className="admin">Admin</Link>        
            <li onClick = {handleLogout} className="logout">Log Out</li>
            </ul>

            <div className="hamburger" onclick = {mobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        
    </nav>
    </header>
    )

} else if ( currentUser ){ //regular user
    return(
      <header className="header">
      <nav className = "nav">
          <Link to ="/robot" className="logo-box"> <img src="/rectangle.png"  alt="logo" className="logo"/> </Link>
          <ul className="nav-left">
                    <Link to ="/robot" className="robots">Robots</Link>
                    <Link to="/result" className="results">Results</Link>
          </ul>
      
          <ul className="nav-right">    
            <li onClick = {handleLogout} className="logout">Log Out</li>
          </ul>

          <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

      </nav>
      </header>
    )
} else { //not logged in 
    return (
        <article>
        <ul>
            <Link to ="/login"> {Login} </Link>
        </ul>

        <ul>
            <Link to="/signup"> {SignUp} </Link>
        </ul> 
        </article>
    )
}
};

export default HeaderNav;
