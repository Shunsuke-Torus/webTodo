import React from 'react'
import { useState } from 'react';
import {HStack,IconButton} from "@chakra-ui/react"
import {CheckIcon} from "@chakra-ui/icons"

import {useDispatchTodos } from '../contexts/TodoContext';

const Item = ({todo}) => {
  const dispatch = useDispatchTodos()

  const [changeValue, setChangeValue] = useState(todo.content)

  const changeContent = (e) =>{
    setChangeValue(e.target.value)
  }

  const toggleEditMode = () =>{
    const newTodo = {...todo,flag: !todo.flag}
    dispatch(
      {
        type: "todo/update",
        todo: newTodo
      }
    )
  }

  const confirmContent = (e) =>{
    e.preventDefault()
    const newTodo = {...todo,
      flag: !todo.flag,
      content: changeValue
    }
    dispatch(
      {
        type: "todo/update",
        todo: newTodo
      }
    )
  }

  const deleteTodo = (todo) =>{
    dispatch(
    {
      type: "todo/remove",
      todo: todo
    })
  }

  return (
    <HStack spacing="6" py="1" key={todo.id}>
      <IconButton icon={<CheckIcon/>} bg="blue.100" isRound="true" onClick={()=>{deleteTodo(todo)}} >完了</IconButton>
      <form onSubmit={confirmContent} >
      {todo.flag ? (<input type="text" value={changeValue} onChange={(e)=>{changeContent(e)}} />) 
        :(<span onDoubleClick={toggleEditMode} >{todo.content}</span>)}
      </form>
    </HStack>
  )
}

export default Item