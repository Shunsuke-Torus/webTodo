import React from 'react'
import { useState } from 'react'
import {useDispatchTodos } from '../contexts/TodoContext';
import {Input,Center,IconButton} from "@chakra-ui/react"
import {AddIcon} from "@chakra-ui/icons"
//追加画面
const Form = () => {
  const dispatch = useDispatchTodos()

  const [inputVal, setInputVal] = useState("")
  
  const addTodo = (e) =>{
    e.preventDefault()
    const newTodo = {
      id: Math.floor(Math.random()*1e5) ,
      content: inputVal
    }
    dispatch(
      {
        type: "todo/add",
        todo: newTodo
      }
    )
    setInputVal("")
  }
  
  return (
    <div>
      <Center py="10" >
        <form onSubmit ={addTodo}>
          <Input width='auto' type="text" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} />
          <IconButton isRound="true" bg="blue.200" icon={<AddIcon/>} onClick={addTodo}/>
        </form>
      </Center>
      
    </div>
  )
}

export default Form