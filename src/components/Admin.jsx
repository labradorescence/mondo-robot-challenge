import React, {useState} from 'react';
//import RobotCollection from './RobotCollection';
import RobotCard from './RobotCard';


function Admin ( {robot} ){

    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const fileInput = React.createRef();

    //Create Robot
    const handleSubmit = e => {

         e.preventDefault();
        const formData = new FormData()

        formData.set('name', name);
        formData.set('image', image); 
 
        console.log("about to post")
         fetch(`https://mondo-robot-art-api.herokuapp.com/robots/`, {    
            method: 'POST',
            credentials: 'include',
            //mode: 'no-cors',
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem("token")}`,
                'x-robot-art-api-key': '3d100850f7f996899c4b3a9492aa0017',
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
                },
                body: formData
                //body: JSON.stringify(formData) 
            }) 
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('', error));
    }

    return(
        <main>

            <form onSubmit = {handleSubmit}>
                <input 
                   type = "text"
                   name = "name"
                   autoComplete = "off"
                   value = {name}
                   onChange = {e => setName(e.target.value)} 
                />

                <input 
                   type = "file"
                   ref = {fileInput}
                   name = "image"
                   autoComplete = "off"
                   //value = {image} //DO NOT ADD the VALUE. If added, doesn't work
                   onChange = {(e) => {
                       console.log(e.target.files[0].name)
                       setImage(e.target.files[0])}} 
                   accept="image/*"
                />
                <input type="submit" value = "submit" />
            </form>


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
        </main>
    )
}

export default Admin;