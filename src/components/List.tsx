import {VStack,StackDivider,Box} from "@chakra-ui/react"
import Item from './Item';
import { useTodos} from '../contexts/TodoContext';
import React from "react";

const List:React.FC= () => {

  const todosList = useTodos()

  return (
    <VStack 
      divider={<StackDivider/>}
      borderWidth ="1px"
      borderRadius="50px"
      p={10}
      alignItems="start"
      boxShadow='md'
    >
      <Box>
        {todosList.map((todo)=>{
          return(
            <Item todo={todo} key={todo.id} />
          )
        })}
      </Box>
    </VStack>
  )
}

export default List