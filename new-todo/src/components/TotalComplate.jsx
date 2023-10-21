import React from 'react'
import { useSelector } from 'react-redux'

const TotalComplate = () => {
    const toggleComplate = useSelector((state) => 
    state.todos.filter((todos) => todos.completed === true))
  return (
    <div className='totalComplate'>
      <h4 className='totalComplateh4' >Total Complate: {toggleComplate.length}</h4>
    </div>
  )
}

export default TotalComplate
