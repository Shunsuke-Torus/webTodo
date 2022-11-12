import React from 'react'
import { useState } from 'react'
import {useDispatchTodos } from '../contexts/TodoContext';
import {Input,Center,IconButton} from "@chakra-ui/react"
import {AddIcon} from "@chakra-ui/icons"
//追加画面

const Form = () => {
  const dispatch = useDispatchTodos()

  const [inputVal, setInputVal] = useState("")

  const onClick = (event: React.MouseEvent<HTMLElement, MouseEvent>):void => {
    event.preventDefault()
    addTodo()
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault()
    addTodo()
  }

  const addTodo = ():void =>{
    const newTodo = {
      id: Math.floor(Math.random()*1e5) ,
      content: inputVal,
      flag: false
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
        <form onSubmit ={onSubmit}>
          <Input width='auto' type="text" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}} />
          <IconButton aria-label="add Todo" isRound bg="blue.200" icon={<AddIcon/>} onClick={onClick} ></IconButton>
        </form>
      </Center>
      
    </div>
  )
}

export default Form