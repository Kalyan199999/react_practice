
import { Routes,Route } from 'react-router-dom';

import Navbar from './navbar';
import Product from './product';
import EachProduct from './eachProduct';
import Home from './home'
import About from './about'
import Empty from './empty';


// Routing

function LoadComponents(params) {
    return(
        <>
           {/* <BrowserRouter> */}
          
            <Navbar />

            <Routes>
            
              <Route path='/' element={<Home />}></Route>
            
              {/* <Route path='/products' element={<Product />}></Route> */}
            
                {/* Each product disple */}
              {/* <Route path='/products/:id' element={<EachProduct/>}></Route> */}
            
              {/* Nested routing */}
              <Route path='/products'>
            
                <Route index element={<Product />} />

                {/* Each product disple */}
                <Route path=':id' element={<EachProduct />} />
            
              </Route>
            
              <Route path='/about' element={<About />}></Route>
              
              <Route path='*' element={<Empty />}></Route>
              
            </Routes>
            
            {/* </BrowserRouter> */}
        </>
    )
}

export default LoadComponents;