import React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

//追加画面
const Form = ({createTodo}) => {
  const [inputVal, setInputVal] = useState("")
  
  const addTodo = (e) =>{
    e.preventDefault()
    const todo = {
      id: Math.floor(Math.random()*1e5) ,
      content: inputVal
    }
    createTodo(todo)
    setInputVal("")
  }
  
  return (
    <div>
      <h1>From</h1>
      <form onSubmit ={addTodo}>
        <input type="text" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} />
        <Button variant="contained" endIcon={<SendIcon />} onClick={addTodo}>タスクの追加</Button>
      </form>
    </div>
  )
}

export default Form