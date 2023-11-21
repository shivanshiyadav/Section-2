import React, { useState } from 'react'

const StateManagement = () => {
  
    let count = 0;

    // a - readonly , b - update function
    
    const [likes, setLikes] = useState(0);

    const [imglink, setImglink] = useState("");

    return (
    <div className='container'>
        <h1 className='text-center'>State Management</h1>
        <hr />

        <h1>{count}</h1>

        <button className='btn btn-danger' onClick={ () => { count++; console.log(count); } }>Add Count</button>

        <h1>Likes : {likes}</h1>

        <button className='btn btn-primary' onClick={ () => { setLikes(likes+1); } }> Add Like </button>

        <input type="text" className='form-control mt-5' onChange={ (e) => { setImglink(e.target.value) } } />
        <label>Insert Image Link Above</label>

        {/* <h3>{imglink}</h3> */}

        <img className='d-block' src={imglink} alt="" />

    </div>
  )
}

export default StateManagement;