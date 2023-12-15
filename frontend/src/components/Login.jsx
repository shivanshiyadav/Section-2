import React from 'react'
const Login = () => {
  return (
<div className="bg">
<div className='grid'>
      <div className='child1'>
     
      <img src="https://img.freepik.com/premium-vector/office-worker-desktop-cartoon-illustration-young-man-with-laptop_603999-1.jpg?size=626&ext=jpg&ga=GA1.1.1697079592.1681836430&semt=ais" alt="" />

      </div> 
 
   <div className='child2'>
  
    <h3>Sign in with <img  className='logo' src="data:image/png;base64,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" alt="" />
    <img  className='logo'src="data:image/png;base64,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" alt="" />
    <img className='logo' src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" alt="" />
     </h3>
    <h3 className='or'>-----------or-----------</h3>
    <h1 className='title' >Login</h1>
    <label htmlFor="name"> Name: </label>
    <input className='input' type="text" />
    <div>
    <label htmlFor="name"> Email: </label>
    <input className='input' type="email" />
      </div>
    <label htmlFor="name"> Password: </label>
    <input className='input' type="text"  />
   {/* <label htmlFor="Password"> Forgot Password</label>
<input type="radio" /> */}
    
<div>
<button type="button" class="btn btn-primary">Login</button>
{/* <button className='btn-btn-sucess'> Login</button> */}
<h5 className=' do'>Don't have an account? <span className='reg'>Register</span>  </h5>

</div>
     </div> 
      </div>
      
</div>
    
  )
}

export default Login;