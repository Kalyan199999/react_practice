import { useEffect, useState } from "react"
import axios from 'axios';


const API = `https://dummyjson.com/users?limit=0`;

function Pagination() {

    const [data , setData] = useState([]);

    const [currentPage , setCurrentPage] = useState(1)

    // const [rowsPerPage , setRowsPerPage] = useState(10);
    const rowsPerPage = 10;

    const indexOfLastItem = currentPage * rowsPerPage;

    const indexOfFirstItem = indexOfLastItem - rowsPerPage;

    const currentItems =  data?.data?.users?.slice(indexOfFirstItem,indexOfLastItem);
    // console.log(currentItems);

    const totalPages = Math.ceil(data?.data?.total / rowsPerPage);

    console.log(totalPages);
    

    useEffect(()=>{
        getData();
    } , [])
    
    const getData = async ()=>{

        try {
            const res = await axios.get(API);
            console.log(res);
            
            setData(res);

        } catch (error) {
            console.log("Error.......");
            
        }

    }

    const handlePrevious = (e)=>{

        if(currentPage === 1) return;

        setCurrentPage(currentPage-1);

    }

    const handleNext = (e)=>{

        if(currentPage === totalPages) return;

        setCurrentPage(currentPage+1);
        
    }

    const handleClick = (e,idx)=>{

        setCurrentPage(idx)
    }


  return (
    <>
        <table>
            
        <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mail</th>
            <th>Mobile</th>
            <th>User</th>
            </tr>
        </thead>
        <tbody>
        {
            currentItems && currentItems.map((user)=>{
                // console.log(user);

                return(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td><img src={user.image} alt={user.image} /></td>
                    </tr>
                )
            })
        }
        </tbody>
       
        </table>

        <div className="buttons">
            {console.log(currentPage)}
            
            <button onClick={(e)=>handlePrevious(e)} disabled={currentPage === 1}>Prev</button>

            {
                Array.from({length:totalPages} , (_, index)=>(
                    <button onClick={(e)=>handleClick(e,index+1)}>{index+1}</button>
                ) )
            }

            <button onClick={(e)=>handleNext(e)} disabled={currentPage === totalPages}>Next</button>

        </div>
    </>
  )
}

export default Pagination
