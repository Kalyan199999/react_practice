import React from 'react'

import axios from 'axios'

function DeleteData() {

  const handleDelete = async (e)=>{
    e.preventDefault();
    const data = await axios.delete("https://jsonplaceholder.typicode.com/users/1");
    console.log(data);
    
  }

  return (
    <div>
      <button onClick={(e)=>{handleDelete(e)}}>Delete</button>
    </div>
  )
}

export default DeleteData
