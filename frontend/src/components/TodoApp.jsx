import React, { useState } from 'react'

const TodoApp = () => {

    const [todolist, setTodolist] = useState([]);

    const addTask = (e) => {
        if(e.code == 'Enter'){
            console.log(e.target.value);
            // adding new element to todo list
            setTodolist( [ {text : e.target.value, completed: false} ,  ...todolist  ] );
            console.log( [ {text : e.target.value, completed: false} ,  ...todolist  ] );

            e.target.value = "";
        }
    }

    const completeTask = (index) => {
        console.log(index);
        const temp = todolist;
        temp[index].completed = true;
        setTodolist([...temp]);
        console.log(temp);
    }

    const deleteTask = (index) => {
        const temp = todolist;
        temp.splice(index, 1);
        setTodolist([...temp]);
    }

  return (
    <div>
        <div className='containerx'>
            <h1 className='text-center fw-bold'>ToDo App</h1>
            <hr />

            <div className='card'>
                <div className='card-header'>
                    <input type="text" onKeyDown={ addTask } className='form-control' placeholder='Enter Task Here and Hit Enter ↲' />
                </div>
                <div className='card-body'>
                    {todolist.map( ( task, index ) => { return <div className='d-flex justify-content-between p-3 border border-2'>
                        <p className={ task.completed ? 'text-success task-done' : 'fw-bold' }>{task.text}
                          { task.completed ? <span className='badge text-bg-success ms-3'>Completed</span> : '' }
                        </p>
                        <div>
                            <button className='btn btn-primary me-3' onClick={() => { completeTask(index) }} >Complete</button>
                            <button className='btn btn-danger' onClick={() => { deleteTask(index) }} >Delete</button>
                        </div>
                    </div> } ) }
                </div>
            </div>

        </div>
    </div>
  )
}

export default TodoApp;

