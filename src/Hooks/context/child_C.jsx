import { data } from "./parent"

function Child_C({a}) {


  return (
    <div className="child_c">
       This is a Child-B
       <p>This value comes from parent using Props dribiling: "{`${a}`}"</p>

       <data.Consumer>
        {/* In the consumer we have to access the data using the function */}
             {
                (ob)=>{
                    return <h1>This is "{`${ob.name}`}" and "{`${ob.age}`}" and "{`${ob.gender}`}" from parent using Context Hook</h1>
                }
             }
       </data.Consumer>

    </div>
  )
}

export default Child_C
