
import { useState , useEffect  } from "react";

import {  useNavigate } from "react-router-dom";

function Product() {
    
    const [product,setProduct] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        getProducts();
    } ,[])

    async function getProducts() {
        const req =await fetch("https://fakestoreapi.com/products");
        const data = await req.json();

        setProduct(data);
        
    }

    function goToEachProduct(item) {
        
        navigate(`${item.id}` , {state:{objItem:item}})
    }

    return(
        <>

        {
            product && 
            
            <div className="parent">
                {
                product.map((item)=>{

               return(

                  <div className="child" key={item.id}  onClick={(e)=>{
                    e.preventDefault();
                    goToEachProduct(item);
                  }}>

                    <img src={item.image} alt={item.description}  />

                    <h4>{item.title}</h4>
                    
                    <h4>{`$:${item.price}`}</h4>

                  </div>
               )
            })
            }
            </div>
        }
          
        </>
    )
    
}

export default Product;