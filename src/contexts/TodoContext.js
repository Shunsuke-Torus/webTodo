import { useContext,createContext,useReducer } from "react" 

const TodoContext = createContext()
const TodoDispatchContext = createContext()


const reducer = (state,action) =>{

  switch(action.type){
    case "todo/add":
      return [...state,action.todo]

    case "todo/remove":
      const newTodosList = state.filter(todo=>{
        return todo.id !== action.todo.id
      })
      return newTodosList

    case "todo/update":
      const newTodo = state.map(_todo=>{
        return _todo.id === action.todo.id ? {..._todo,...action.todo} :{..._todo}
      })
      return newTodo
    default:
      return state
  }
}

const TodoProvider = ({children}) =>{
  const [todosList, dispatch] = useReducer(reducer,[])
  return (
    <TodoContext.Provider value={todosList} >
      <TodoDispatchContext.Provider value={dispatch} >
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}


const useTodos = ()=>{
  return useContext(TodoContext)
} 
const useDispatchTodos = () =>{
  return useContext(TodoDispatchContext)
} 


export {useTodos,useDispatchTodos,TodoProvider}