import React from 'react'
import { useState } from 'react'
function Input({addtocart}) {
  let [textName,setTextName] = useState("");
  let [textDesc,setTextDesc] = useState("");
  
 function click(){
  addtocart({name:textName,desc:textDesc});
  setTextName("");
  setTextDesc("");
 }
  
  return (
    <>  
    <div className='col d-flex justify-content-evenly '>
    <h1>MY TODO</h1>
  </div>

<div className='row'>
  <div className='col'>
    
    <input type='text' style={{padding:"7px 80px",fontSize:"15px"}} className='form-text me-2 rounded ' value={textName} onChange={(e)=>  setTextName(e.target.value)} placeholder='Todo Name'></input>
    <input type='text'  style={{padding:"7px 80px",fontSize:"15px"}} className='form-text me-2 rounded ' value={textDesc} onChange={(e)=> setTextDesc(e.target.value)} placeholder='ToDo Description'></input>
    <button className='btn input btn-success mb-2 p-2' onClick={() => {textName && textDesc !== "" ? click() : alert("Please fill in both fields"); }} >Add Todo</button>
  </div>
</div> 
</>
  )
}

export default Input
