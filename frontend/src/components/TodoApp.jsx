import React, { useState } from 'react'

const TodoApp = () => {

    const [todolist, setTodolist] = useState([]);

    const addTask = (e) => {
        if(e.code == 'Enter'){
            console.log(e.target.value);

            // adding new element to todo list
            setTodolist( [ e.target.value ,  ...todolist  ] );
            console.log( [ e.target.value ,  ...todolist  ] );

            e.target.value = "";
        }
    }

  return (
    <div>
        <div className='container'>
            <h1 className='text-center fw-bold'>ToDo App</h1>
            <hr />

            <div className='card'>
                <div className='card-header'>
                    <input type="text" onKeyDown={ addTask } className='form-control' placeholder='Enter Task Here and Hit Enter ↲' />
                </div>
                <div className='card-body'>
                    {todolist.map( ( task ) => { return <div className='d-flex justify-content-between p-3'>
                        <p>{task}</p>
                        <button className='btn btn-danger'>Delete</button>
                    </div> } ) }
                </div>
            </div>

        </div>
    </div>
  )
}

export default TodoApp;

