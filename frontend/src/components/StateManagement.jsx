import React, { useState } from 'react'

const StateManagement = () => {
    let count =0;
    const [Likes, setLikes] = useState(0);
    const [Imglink, setImglink] = useState("");
  return (
    <div className="container">
        <h1 className='text-center'>State Management</h1>
      <hr />
      <h1>{count}</h1>
      <button className='btn btn-danger'onClick={() =>{count++; console.log(count);}}>Add Count</button>
    <h1>Likes : {Likes}</h1>
    <button className='btn btn-primary'onClick={() =>{setLikes(Likes+1); }}>Add Likes</button>
    <input type="text" className='form-control mt-4' onChange={(e) => {setImglink(e.target.value)  }} />
    <h1>Insert Image Link Above</h1>
    <img className='d-block' src={Imglink} alt="" />

    </div>
  )
}

export default StateManagement