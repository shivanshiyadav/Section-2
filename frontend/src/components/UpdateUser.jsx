import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateUser = () => {

    const {id} = useParams();

const [userData,setUserData] =useState(null);

    const getUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getbyid/'+id);
         console.log(res.status);
        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
      getUserData();
    }, [])
    

  return (
    <div>
         <div>
        <div className='container py-5'>
        <div className="card shadow">
            <div className="card-body p-5">
              <h3 className='my-3 text-center'>Brand Logo</h3>
              <h5 className='text-center text-muted'>Signup Form</h5>

              <form onSubmit={signupForm.handleSubmit} >

                <label htmlFor="name">Name</label>
                <span className='text-danger ms-3'>{signupForm.touched.name && signupForm.errors.name}</span>
                <input type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name} className='form-control mb-4' />

                <label htmlFor="email">Email Address</label>
                <span className='text-danger ms-3'>{signupForm.touched.email && signupForm.errors.email}</span>
                <input type="text" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} className='form-control mb-4' />

                <label htmlFor="password">Password</label>
                <span className='text-danger ms-3'>{signupForm.touched.password && signupForm.errors.password}</span>
                <input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} className='form-control mb-4' />

                <label htmlFor="confirm">Confirm Password</label>
                <span className='text-danger ms-3'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
                <input type="password" id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} className='form-control mb-4' />


                <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>

              </form>

            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default UpdateUser;