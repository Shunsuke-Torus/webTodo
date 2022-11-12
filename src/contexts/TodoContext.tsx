import { useContext,createContext,useReducer,useEffect, Dispatch } from "react" 

export type Todo = {
  id:number,
  content:string,
  flag:boolean
}

type action = {
  type: "todo/add" | "todo/remove" | "todo/update",
  todo: Todo
}
type TodosDispatch = Dispatch<action>

const TodoContext = createContext<Todo[]|undefined>(undefined)
const TodoDispatchContext = createContext<TodosDispatch|undefined >(undefined)

const reducer = (state:Todo[],action:action):Todo[] =>{

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

const initState= [{
  id: 1,
  content: "",
  flag:false
}]

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({children}) =>{
  const [todosList, dispatch] = useReducer(reducer,initState)

  useEffect(() => {
    dispatch(
      {
        type: "todo/remove",
        todo: {  id: 1,
          content: "",
          flag:false}
      }
    )
  }, [])

  return (
    <TodoContext.Provider value={todosList} >
      <TodoDispatchContext.Provider value={dispatch} >
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}


const useTodos = ()=>{
  const state = useContext(TodoContext)
  if (!state) throw new Error('TodoContext Not Found');
  return state
} 
const useDispatchTodos = () =>{
  const dispatch =  useContext(TodoDispatchContext)
  if (!dispatch) throw new Error('TodoDispatchContext not found');
  return dispatch
} 


export {useTodos,useDispatchTodos,TodoProvider}