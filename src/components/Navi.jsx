import React from 'react';
import { Link } from 'react-router-dom';
//import { Nav } from 'react-bootstrap';

function Navi({currentUser, handleLogout}){

    if( currentUser && currentUser.email === "admin@mondorobot.com" ){ //admin
        return(
        <>
        <li>
        <Link to ="/robot"> ROBOT </Link>
        </li>

        <li>
            <Link to="/result"> Result </Link>
        </li>

        <li>
            <Link to="/admin"> Admin </Link>
        </li>
        <li onClick = {handleLogout}> logout </li>
        
        
        
        {/* <Nav defaultActiveKey="/robot" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/robot">ROBOT</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/result">RESULT</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/admin">ADMIN</Nav.Link>
            </Nav.Item>
            <li onClick = {handleLogout}> logout </li> 
        </Nav>
                 */}
        
        
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

    // return (
    //     <nav>
    //         <ul>
    //             <li>
    //                 <Link to ="/robot"> ROBOT </Link>
    //             </li>

    //             <li>
    //                 <Link to="/result"> Result </Link>
    //             </li>


    //             <li>
    //                 <Link to="/admin"> Admin </Link>
    //             </li>

    //             {currentUser ? ( //if there's a user logged in then show logout
    //                 <li onClick = {handleLogout}>
    //                 logout
    //                 </li>
    //             ) : ( // if no user, show login and signup
               
    //            <>
    //             <li>
    //                 <Link to ="/login"> Login </Link>
    //             </li>

    //             <li>
    //                 <Link to="/signup"> Signup </Link>
    //             </li>

               
    //             </>
    //             ) }
                
    //         </ul>
    //     </nav>
    // )

}
export default Navi