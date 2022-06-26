import React from 'react'

export default function Todo({todo, onDelete}) {
  return (
    <div className="col-md-4">
      <div className="card mb-3 p-3"> 
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete The Item</button>
      </div>
    </div>
  )
}
