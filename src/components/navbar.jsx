
import { Link } from "react-router-dom";
function Navbar() {
    return(
        <div className="navbar">
            <Link to='/'><h3>Home</h3></Link> 
            <Link to='/products'><h3>Products</h3></Link>
            <Link to='/about'><h3>About</h3></Link>
        </div>
    )
}

export default Navbar;