import React, {useEffect, useState} from 'react';
import ResultCard from './ResultCard';
import {Redirect} from 'react-router-dom';


function ResultCollection ({robot}) {

        const [redirect, setRedirect] = useState(false)       

        useEffect( () => {
             
            if(!localStorage.getItem("token")){
                setRedirect(true)

            }else{

                // const getVote = (robotId) => {
                //     fetch(`https://mondo-robot-art-api.herokuapp.com/robots/${robotId}/votes`, {
                //         method: 'GET',
                //         headers: {
                //             'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                //             'x-robot-art-api-key': '3d100850f7f996899c4b3a9492aa0017',
                //             'Accept': 'application/json',
                //             'Content-Type': 'application/json',
                //             },   
                //             body: JSON.stringify({robot: robotId})
                //         })
                //         .then(response => response.json())
                //         .then(data => {
                //             console.log("FETCHIN DATA", data) 
                //         })
                //         .catch(error => console.log('error', error));
                //         }
            

            const getVote = (robotId) => {
                fetch(`https://mondo-robot-art-api.herokuapp.com/robots/${robotId}/votes`, {    
                    method: 'GET',
                    headers: {
                        'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                        'Accept': 'application/json',
                        }
                    }) 
                    .then(response => response.json())
                    .then(voteData => {
                        console.log("VOTE DATA", voteData) 
                    })
                    .catch(error => console.log('VOTE error', error));
                    }
                    getVote()

    
            // const getRobot = () => {
            // fetch(`https://mondo-robot-art-api.herokuapp.com/robots`, {
            //   headers: {
            //     "Authorization": `Bearer ${localStorage.getItem("token")}`
            //   }
            // })
            //   .then(r => r.json())
            //   .then(robotData => {
            //       setRobot(robotData)
            //   })
            //   .then(()=>{
            //      for(let i = 0; i < robot.length; i++){
            //          getVote(robot[i].id)
            //      }
            //   })
            //   .catch(error => console.log(error))
            // }
            // getRobot() 

        }

        }, [])

     const cards = robot.map((each, index) =>

         <ResultCard //sending id, name, url as props to ResultCard
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

export default ResultCollection