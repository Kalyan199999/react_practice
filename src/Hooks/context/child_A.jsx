import Child_B from "./child_B"

function Child_A({a}) {
    
  return (
    <div className="child_a">
        This is a Child-A
        <Child_B a={a} />
    </div>
  )
}

export default Child_A
