import React,{useState} from 'react'
import FuncComp from './FuncComp'
import ClassComp from './ClassComp'


const Main = () => {
  const [toggle1,setToggle1] = useState(false)  
  const [toggle2,setToggle2] = useState(false)   

  const displayClassComp = () =>{
    toggle1 ? setToggle1(false) : setToggle1(true)
  }  
  const displayFuncComp = () =>{
    toggle2 ? setToggle2(false) : setToggle2(true)
  }
  return (
    <div>
        <h1>Styling using Functional and Class Component</h1>

         <div className='container container1'>
           <div>
                <button className='btn btn-success' onClick={displayClassComp}>Click to see the styling for Functional Component</button>
           </div>  
           <div>
                <button className='btn btn-success' onClick={displayFuncComp}>Click to see the styling for Class Component</button>
           </div>  
        </div>
        <br/>

        <div className='container container2'>
            <div id='display'>
             { toggle1 && <FuncComp/>}   
            </div>   
            <div id='display'>
             { toggle2 && <ClassComp/>}
            </div>   
        </div>
      
    </div>
  )
}

export default Main