import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { addTodo } from '../redux/actions/todoAction'
import axios from 'axios'


const AddForm = () => {

    const dispatch= useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id:v4(),
            text: event.target[0].value,
            isDone:false,
            date: new Date()
        }

        axios.post('/todos',newTodo).then(()=>{
          //api ye başarılı bir şekilde kayıt yapıldıktan sonra reducer a emir gönderiyoruz
          dispatch(addTodo(newTodo))

        }).catch(()=>alert("ekleme işlemi başarısız oldu"))
        // dispatch({
        //     type:ActionTypes.ADD_TODO,
        //     payload:newTodo
        // }); 
       
        event.target[0].value='';
    }
      return (
    <form onSubmit={handleSubmit}
     className='d-flex gap-3'>
        <input className='form-control' type="text" placeholder='Add your text...'/>
        <button className='btn btn-warning '>Add</button>
    </form>
  )
}

export default AddForm