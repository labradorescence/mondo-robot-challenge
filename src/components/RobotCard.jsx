import React from 'react';
import Vote from './Vote';
import { Card } from 'react-bootstrap';

function RobotCard( {id, name, url} ){


    return(

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
               
                <Vote robotId = {id} />
              
            </Card.Body>
            </Card>

    )
}

export default RobotCard;