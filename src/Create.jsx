import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [task,setTask]=useState();
    const handleAdd=()=>{
        axios.post('https://suryatodolist.onrender.com/add',{task:task})
        .then(result=>location.reload())
        .catch(err=>console.log(err))
    }
  return (
    <div className='create'>
        <input type="text" placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default Create
