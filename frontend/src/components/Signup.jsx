import React from 'react'
import {useFormik} from 'formik'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(5,'Too short!').required('Required')
});
const Signup = () => {
  const SignupForm = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',

    },
    onSubmit: (value,{resetForm})=>{
      alert( JSON.stringify(value));
      console.log(value);
      resetForm();
      toast.success('Form Submit')
    },
    validationSchema: SignupSchema
  });
  return (
    <div>

      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h3 className='my-3 text-center'>Brand Logo</h3>
            <h5 className='text-center text-muted'>Signup Form</h5>

            <form onSubmit={SignupForm.handleSubmit} >

              <label htmlFor="name">Name</label>
              <span className='text-dander ms-3'>{SignupForm.touched.name && SignupForm.errors.name}</span>
              <input type="text" id='name' onChange={SignupForm.handleChange} value={SignupForm.values.name} className='form-control mb-4' />

              <label htmlFor="email">Email Address</label>
              <span className='text-dander ms-3'>{SignupForm.touched.email && SignupForm.errors.name}</span>
              <input type="text" id='email'onChange={SignupForm.handleChange} value={SignupForm.values.email} className='form-control mb-4' />

              <label htmlFor="password">Password</label>
              <span className='text-dander ms-3'>{SignupForm.touched.password && SignupForm.errors.name}</span>
              <input type="password" id='password'onChange={SignupForm.handleChange} value={SignupForm.values.password} className='form-control mb-4' />

              <button type='submit' className='btn btn-primary w-100 my-4'>Submit</button>

            </form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Signup;