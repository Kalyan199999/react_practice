
import { createContext } from "react";
import Child_A from "./child_A"

import './style.css';

// create the context
export const data = createContext();

function Parent() {

    const a = "kalyan";

    const obj = {name:"Pavan" , age:25 , gender:"male"}

  return (
    <div className="parent">
        This is a Parent Component.

        {/* Provide the context */}
        <data.Provider value={obj}>

            <Child_A a={a} />

        </data.Provider>
        
    </div>
  )
}

export default Parent