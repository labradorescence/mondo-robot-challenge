import React from 'react';
import { Button} from 'react-bootstrap';

function Vote ( {robotId, token} ){

    //console.log(`${localStorage.getItem("token")}`)

        function handleVote () {

        //console.log(`${localStorage.getItem("token")}`) //undefined

        fetch("https://mondo-robot-art-api.herokuapp.com/votes", {
            method: 'POST',
            headers: {
                //"Authorization": `Bearer ${token}`, // 500 (Internal Server Error)
                'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                'x-robot-art-api-key': '3d100850f7f996899c4b3a9492aa0017',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                },   
                body: JSON.stringify({robot: robotId})
            })
            .then(response => response.json())
            .then(data => {
                console.log("FETCHIN DATA", data) //now what the fuck do i do here
            })
            .catch(error => console.log('error', error));
            }

    return(
            <Button onClick = {handleVote}> vote </Button>
    )
}

export default Vote