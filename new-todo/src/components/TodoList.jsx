import React, { useEffect } from 'react'
import TodosItem from './TodosItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getTodosAsaync } from '../redux/todoSlice'




const TodoList = () => {
    const dispatch = useDispatch();
    const todos  = useSelector((state) => state.todos)

    useEffect(()=>{
        dispatch(getTodosAsaync())
    },[dispatch])


  return (
    <div className='todos-list'>

      {
        todos.map((todo) => (
          <TodosItem 
          id={todo.id} 
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
            /> 
        ))
      }
    </div>
  )
}

export default TodoList
