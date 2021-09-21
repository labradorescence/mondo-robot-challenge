import React, { useState } from 'react';
import RobotCard from './RobotCard';
import { Redirect } from 'react-router-dom';

function RobotCollection ({robot}) {
   
        //const [robot, setRobot] = useState([])

        const [ redirect ] = useState(false)

        // useEffect( () => {
             
        //     if(!localStorage.getItem("token")){
        //         setRedirect(true)

        //     }else{
    
        //     const getRobot = () => {
        //     fetch(`https://mondo-robot-art-api.herokuapp.com/robots`, {
        //       headers: {
        //         "Authorization": `Bearer ${localStorage.getItem("token")}`
        //       }
        //     })
        //       .then(r => r.json())
        //       .then(robotData => {
        //           setRobot(robotData)
        //       })
        //       .catch(error => console.log(error))
        //   }
        //     getRobot()         
        // }

        // }, [])

     const cards = robot.map((each, index) =>

         <RobotCard //sending id, name, url as props to RobotCard
            key = {index}
            id = {each.id}
            name = {each.name}
            url = {each.url}
            /> 
        )

        return(
            <main>
                {redirect ? <Redirect to ="/login" /> : cards } 
                {/* if there isn't token, then redirect to login else show card  */}
            </main> 
        )
}

export default RobotCollection