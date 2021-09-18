import React, {useState} from 'react';
//import RobotCollection from './RobotCollection';
import RobotCard from './RobotCard';
import { Card } from 'react-bootstrap';

function Admin ( {robot} ){

    const [name, setName] = useState("")
    const [image, setImage] = useState("")

   



     //Create Robot
    const handleSubmit = e => {

         e.preventDefault();
        const formData = new FormData()

        formData.set('name', name);
        formData.set('image', image); 

         fetch(`https://mondo-robot-art-api.herokuapp.com/robots/`, {    
            method: 'POST',
           // mode: 'no-cors',
            headers: {
               // 'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjoiOGM2OGY2NDAwZTU2NjZlODkwYjUzZWUxZmNkYWU5M2MiLCJpYXQiOjE2MzE4OTQ0MDV9._fuXL3XoHseXNRtNHDMQynktB97c8b1l56oy2ecbIcw",
                'Authorization' : `Bearer ${localStorage.getItem("token")}`,
              //  'x-robot-art-api-key': '3d100850f7f996899c4b3a9492aa0017',
                'accept': 'application/json',
                //'Content-Type':  'multipart/form-data'
                },
                body: formData
            }) 
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('', error));
    }

    return(
        <div>

            <Card style={{ width: '18rem' }}>
            <form onSubmit = {handleSubmit}>
                <input 
                   type = "text"
                   name = "name"
                   autoComplete = "off"
                   value = {name}
                   onChange = {e => setName(e.target.value)} 
                />


                <label for="img">Select image:</label>


                <input 
                   type = "file"
                   name = "image"
                   autoComplete = "off"
                   value = {image}
                   onChange = {e => setImage(e.target.files[0])} 
                   accept="image/*"
                />
                <input type="submit" value = "??new robot??" />

                {/* first element of the file (which is an array)  */}
            </form>
            </Card>

            {robot && robot.map((each)=>{
                return(
                <RobotCard //sending id, name, url as props to RobotCard
                key = {each.id}
                id = {each.id}
                name = {each.name}
                url = {each.url}
                /> 
                )
            })}
        </div>
    )
}

export default Admin;