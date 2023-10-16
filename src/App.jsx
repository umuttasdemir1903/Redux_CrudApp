import { useEffect } from "react"
import AddForm from "./components/AddForm"
import ListTodo from "./components/ListTodo"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setTodos } from "./redux/actions/todoAction"


function App() {

  const dispatch = useDispatch();
  axios.defaults.baseURL='http://localhost:4000'

  useEffect(()=> {
    axios.get('/todos')
    .then((res)=>dispatch(setTodos(res.data)))
  },[])
  
  return (
   <div className="d-flex flex-column gap-5 p-5 ">
    <h1 className="text-center">Redux</h1>
    <AddForm/>
    <ListTodo/>
   </div>
  )
}

export default App
