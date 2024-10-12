import './style.css'

import { useState,useEffect } from 'react';
import axios from 'axios';

const GetRequest = () => {

    const [items,setItem] = useState([]);

    async function getData() {
        const resData = await axios.get("https://jsonplaceholder.typicode.com/users");
        
        setItem(resData.data);
    }

    useEffect(()=>{
        getData();
        
    } , [])

    return (
        
        <div className='parentContainer'>
            
            {
                items && items.map((user)=>{
           
                    return(
                        <div className="childContainer" key={user.id}>
                            <h3 >{user.id}</h3>
                            <h3>{user.username}</h3>
                            <h3>{user.name}</h3>
                            <h3>{user.email}</h3>
                            <h3>{user.phone}</h3>
                            <h3>{user.website}</h3>
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default GetRequest;