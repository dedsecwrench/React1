import React, { Component } from 'react'

const classPara ={
   color:'white',
   fontSize:'20px'   
}  
class ClassComp extends Component {

  render() {
    return (
         <div>
            <div className='classComp'>
            <h3>This is created using class component.</h3>
            <br/>
            <p className='p1'>This is done using external css</p>
            <p style={classPara}>This is done using inline css</p>
          </div>
         </div>
    )
  }
}

export default ClassComp