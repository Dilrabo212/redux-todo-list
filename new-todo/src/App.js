import React from 'react'
import AddForm from './components/AddForm'
import TodoList from './components/TodoList'
import TodosItem from './components/TodosItem'
import TotalComplate from './components/TotalComplate'

const App = () => {
  return (
    <div className='bigWrapper'>
      <div div className='todos-list'>
        <h3 className='text'>Todo List</h3>
      <AddForm/>
      <TodoList/>
      <TodosItem/>
      <TotalComplate/>
      </div >
     
    </div>
  )
}

export default App

