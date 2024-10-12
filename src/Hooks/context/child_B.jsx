import Child_c from "./child_C"

function Child_B({a}) {
  return (
    <div className="child_b">
        This is a Child-B
        <Child_c a={a} />
    </div>
  )
}

export default Child_B
