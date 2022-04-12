import React from 'react'

const funcPara ={
    color:'white',
    fontSize:'20px'   
 }  
const FuncComp = () => {
  return (
    <div>
        <div className='functional'>
            <h3>This is created using functional component.</h3>
            <br/>
            <p className='p1'>This is done using external css</p>
            <p style={funcPara}>This is done using inline css</p>
        </div>
    </div>
  )
}

export default FuncComp