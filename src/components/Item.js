import React from 'react'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';

const Item = ({todo,deleteTodo,updateTodo}) => {
  const [changeValue, setChangeValue] = useState(todo.content)

  const changeContent = (e) =>{
    setChangeValue(e.target.value)
  }

  const toggleEditMode = () =>{
    const newTodo = {...todo,flag: !todo.flag}
    updateTodo(newTodo)
  }

  const confirmContent = (e) =>{
    e.preventDefault()
    const newTodo = {...todo,
      flag: !todo.flag,
      content: changeValue
    }
    updateTodo(newTodo)
  }

  return (
    <div key={todo.id}>
      <CheckBoxIcon color='primary' onClick={()=>{deleteTodo(todo.id)}} >完了</CheckBoxIcon>
      <form onSubmit={confirmContent} >
      {todo.flag ? (<input type="text" value={changeValue} onChange={(e)=>{changeContent(e)}} />) 
        :(<span onDoubleClick={toggleEditMode} >{todo.content}</span>)}
      </form>
      
    </div>
  )
}

export default Item