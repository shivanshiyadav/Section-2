import React, { useState } from 'react'

const TodoApp = () => {

    const [todolist, setTodolist] = useState([])


    const addTask =(e) =>{
        if (e.code =='Enter'){
        console.log(e.target.value);

        //add new element to todo list

        setTodolist( [e.target.value , ...todolist] );
        console.log([e.target.value , ...todolist]);
        e.target.value ="";
        }
    }
    
  return (

    <div>
    <div className="container">
        <h1 className='texxt-center fw-bold'>Todo App</h1>
        <hr />
        <div className="card-header">
            <input type="text" onKeyDown={addTask} className='form-control' placeholder='Enter Tast here and Hit here⬇️' />
        </div>
        <div className="card-body">
    {todolist.map( (task)=> {return <h1>{task}</h1>} )} <div className='d-flex justify-content-space between'>
    <p>{task}</p>
    <button className='btn-btn-danger'>Delete</button>
    </div>
        </div>
    </div>
    </div>
  )
}

export default TodoApp;