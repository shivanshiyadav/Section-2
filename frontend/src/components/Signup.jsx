import React from 'react'

const Signup = () => {
  return (
    <div>

      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h3 className='my-3 text-center'>Brand Logo</h3>
            <h5 className='text-center text-muted'>Signup Form</h5>

            <form>

              <label htmlFor="name">Name</label>
              <input type="text" id='name' className='form-control mb-4' />

              <label htmlFor="email">Email Address</label>
              <input type="text" id='email' className='form-control mb-4' />

              <label htmlFor="password">Password</label>
              <input type="password" id='password' className='form-control mb-4' />

              <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup;