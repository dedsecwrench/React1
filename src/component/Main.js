import React,{useState} from 'react'
import FuncComp from './FuncComp'
import ClassComp from './ClassComp'


const Main = () => {
 const [toggle,setToggle] = useState({
    one : false,
    two : false
  })
  const displayClassComp = () =>{
    toggle.one ? setToggle({...toggle,one:false}) : setToggle({...toggle,one:true}) 
  }  
  const displayFuncComp = () =>{
    toggle.two ? setToggle({...toggle,two:false})  : setToggle({...toggle,two:true}) 
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
             { toggle.one && <FuncComp/>}   
            </div>   
            <div id='display'>
             { toggle.two && <ClassComp/>}
            </div>   
        </div>
      
    </div>
  )
}

export default Main
