
import React, { useRef } from 'react'

function UseRefHook() {

    const reference = useRef(null);

    const handleClick = (e)=>{
        e.preventDefault();
        console.log(reference);
        reference.current.value = "pavan Kalyan";

    }
    
  return (
    <div>
      <input type="text" placeholder='Name'  ref={reference} className='input'  />
      <button onClick={(e)=>{handleClick(e)
      }}>click</button>
    </div>
  )
}

export default UseRefHook;
