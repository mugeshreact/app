import React, { useState } from 'react'

const UseState = () => {
    const [arr,setArr] = useState(()=>{
        console.log('initialize Array');
        let arr = []
        for(let i=0;i<1000;i++){
            arr.push(i);
        }
        return arr
    })
  return (

    <div>
        <p onClick={()=>setArr([...arr,1])}> {arr.length} </p>
    </div>
  )
}

export default UseState