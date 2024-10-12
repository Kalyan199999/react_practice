import {  useLocation } from "react-router-dom";

function EachProduct() {

  const locate = useLocation();

  const item = locate.state.objItem;

    return(
        <>
          {
            item &&
            <div className="item">
              
                <img src={item.image} alt="" />
                <div className="aboutItem">
                <h2><label >Category:</label>{item.category}</h2>
                <h3><label>Price :</label>$.{item.price}</h3>
                <h1><label>About:</label>{item.description}</h1>
                </div>

            </div>
          }
        </>
    )
}

export default EachProduct;