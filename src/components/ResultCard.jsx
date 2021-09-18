import React, {useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';

function ResultCard( {id, name, url} ){

    const [numVote, setNumVote] = useState(0)

    useEffect( () => {
            if (id){ //just in case, id is undefined yet 
            
            fetch(`https://mondo-robot-art-api.herokuapp.com/robots/${id}/votes`, {    
                method: 'GET',
                headers: {
                    'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                    'Accept': 'application/json',
                    }
                }) 
                .then(response => response.json())
                .then(voteData => {
                    const numberOfVote = getVoteNumber(voteData) //numberOfVote = size of the set
                    setNumVote(numberOfVote)
                })
                .catch(error => console.log('VOTE error', error));
            }
    }, [id])//dependency array: when you add the id in the array, it acts like "componentDidUpdate" 
    //if the "argument("id")" in the array is not equal to the value of the prop then, it will run once. 
    //if it's equal, then it will not run again.
    
    function getVoteNumber(voteData){
        const numVote = new Set () //set only return the unique value, so create the empty set first
        voteData.forEach((eachVoteData)=> { //then iterate the voteData and get the each vote
            numVote.add(eachVoteData.user) //there are many vote by same user, so blindly add the unique voteId because "set"  
        })
        return numVote.size //returning the size of the set
    }

    return(
        <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h1>{numVote}</h1>
            </Card.Body>

       
         
           
        </Card>
    )
}

export default ResultCard;