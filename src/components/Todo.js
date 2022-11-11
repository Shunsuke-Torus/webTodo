import React from 'react'
import { Box } from "@chakra-ui/react"
import List from './List'
import Form from './Form'
import { TodoProvider } from '../contexts/TodoContext'
import Heder from './Heder'

const Todo = () => {
  return (
    <div>
      <Heder/>
      <TodoProvider>
        <List/>
        <Form/>
      </TodoProvider>
    </div>    

  )
}


export default Todo