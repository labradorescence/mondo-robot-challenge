import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: #414242;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(2) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const LinkStyle = styled.a`
  color: #414242;
  text-decoration: none !important;

  :hover {
    text-decoration: none;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #414242;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #ffffff;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

const HeaderNav = ( {currentUser, handleLogout}) => {
  const [toggle, toggleNav] = useState(false);



  if( currentUser && currentUser.email === "admin@mondorobot.com" ){ //admin
    return(


    <>
      <Nav>
      
      <Link to = "/robot">
        <Logo>MONDO ROBOT</Logo>
      </Link>   
     
            <Link to ="/robot">
              <LinkStyle>
              Robots
              </LinkStyle> 
           </Link >
         
            <Link to ="/result">
              <LinkStyle>
                Results
              </LinkStyle> 
            </Link >       
        
        <Menu>

         

          <Item>
            <Link to="/admin">
              <LinkStyle>
                Admin
              </LinkStyle>
            </Link>
          </Item>

          <Item>
            <LinkStyle>
              <li onClick = {handleLogout}>
                Log Out
              </li>
            </LinkStyle>
          </Item>
        </Menu>

        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>

      </Nav>

      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>

          <Item>
            <Link to ="/robot">
              <LinkStyle>
              Robots
              </LinkStyle> 
           </Link >
          </Item>

          <Item>
            <Link to ="/result">
              <LinkStyle>
                Results
              </LinkStyle> 
            </Link >
          </Item>

          <Item>
            <Link to="/admin">
              <LinkStyle>
                Admin
              </LinkStyle>
            </Link>
          </Item>

          <Item>
            <LinkStyle>
              <li onClick = {handleLogout}>
                Log Out
              </li>
            </LinkStyle>
          </Item>

        </OverlayMenu>
      </Overlay>
    </>



    )
} else if ( currentUser ){ //regular user
    return(
         <>
            <li>
                <Link to ="/robot"> ROBOT </Link>
            </li>

            <li>
                <Link to="/result"> Result </Link>
            </li>
            <li onClick = {handleLogout}> logout </li>
            </>
    )
} else { //not logged in 
    return (
        <>
        <li>
            <Link to ="/login"> Login </Link>
        </li>

        <li>
            <Link to="/signup"> Signup </Link>
        </li>        
        </>
    )
}
};

export default HeaderNav;
