import axios from 'axios';
import React, { useState } from 'react'



function PostData() {
    const data = {'fname':"" , 'lname':""}
    let [inputData,setInput] = useState(data)

    const handleInput = (e)=>{
        
        e.preventDefault();

        setInput(
            {...inputData ,
            [e.target.name]:e.target.value
        })
        
    }

    // post data
    const handlePost = async (e)=>{
        e.preventDefault();
        const data = await axios.post("https://jsonplaceholder.typicode.com/users" , inputData);
        console.log(data);
        setInput({fname:"",lname:""})
    }

    // Put data
    const handlePutData = async (e)=>{
        e.preventDefault();
        const data = await axios.put("https://jsonplaceholder.typicode.com/users/1",inputData);
        console.log(data);
        setInput(inputData);
    }

  return (
    <form action="">
        
        <div>
            <label >FirstName:</label>
            <input type="text" name='fname' value={inputData.fname} onChange={(e)=>{handleInput(e)}} />
        </div>

        <div>
            <label >LastName:</label>
            <input type="text" name='lname' value={inputData.lname} onChange={(e)=>{handleInput(e)}}/>
        </div>

        <button onClick={(e)=>{handlePost(e)}}>Post</button>

        <button onClick={(e)=>{handlePutData(e)}}>Put</button>

    </form>
  )
}

export default PostData
