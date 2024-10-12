// UseMemo hook

import {  useMemo, useState } from "react";

let i = 0;


function Memo() {

    const [add,setAdd] = useState(0);

    const [sub,setSub] = useState(100);
    

    // calls the function if only the add state changes
    const multiply = useMemo(function multiplication() {
        console.log(i+" ***************");
        i++;
        
        return (add*sub);
    }  , [add])

    function addition() {
        setAdd(add+1);
    }
    
    function subtaction() {
        setSub(sub-1);
    }

  return (
    <div>
      <h1>useMemo</h1>
      <h3>Addition:{add}</h3>
      <button onClick={()=>{addition()}}>Addion</button>
      <h3>Subtraction:{sub}</h3>
      <button onClick={()=>{subtaction()}}>Subtaction</button>

      <h3>Multiplication:{multiply}</h3>
    </div>
  )
}

export default Memo;
