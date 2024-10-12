import React from 'react'


// import UseRefHook from './useRefHook';

// import Parent from './context/parent';

// import Memo from './memo';

// Lazy Loading
import {lazy,Suspense} from 'react'

const Lazyload = lazy(()=>import ('./lazyLoading'))

function LoadHooks() {
  return (
    <>
        {/* <UseRefHook /> */}
        {/* <Parent /> */}
        {/* <Memo /> */}
        
        <h1>Learning Lazy Loading</h1>
        <Suspense fallback={<div>Loading.................</div>}>
          <Lazyload />
        </Suspense>
    </>
  )
}

export default LoadHooks;
