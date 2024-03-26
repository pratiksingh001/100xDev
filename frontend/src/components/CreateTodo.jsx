import React from 'react'

const CreateTodo = () => {
  return (
    <div>
        <input type='text' placeholder='Enter Todo'></input> 
        <br />
        <input type='text' placeholder='Todo Description'></input>
        <br />
        <button type='submit'>Submit Todo</button>
    </div>
  )
}

export default CreateTodo