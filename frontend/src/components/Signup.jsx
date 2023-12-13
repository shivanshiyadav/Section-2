import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5,'Too Short!')
    .required('Required')
    .matches(/[0-9]/, 'Number is Required')
    .matches(/[a-z]/, 'LowerCase is Required')
    .matches(/[A-Z]/, 'UpperCase is Required')
    .matches(/[^\w]/, 'Special Character is Required'),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords Must Match !')
    .required('Required')
});

const SignUp = () => {

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: ''
    },
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values));
      console.log(values);

      //send req to backend/Rest API
      const response = await fetch('http://localhost:5000/user/add', {
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('Registered Successfully', {variant: 'success'});
      }else{
        enqueueSnackbar('Something Went Wrong', {variant: 'error'});
      }

      // resetForm();
      // toast.success('Form Submitted Successfully');

    },
    validationSchema: SignupSchema
  });



  return (
    <div style={{ fontFamily: 'Montserrat' }}>
      <div className='container text-start mt-4'>
        <div className='row'>
          <div className='col d-flex align-items-center justify-content-center' style={{backgroundColor: '#5627CC', color: 'white'}}>
            <div className='card display-1 border-0 '>
              <div className='card-body '>
                Welcome
                <br />
                Back !!
              </div>
            </div>
          </div>
          <div className='col'>
            <div className="card">
              <div className="card-body">
                <h3 className='my-3 text-center'>Brand Logo</h3>
                <h5 className='text-center text-muted'>Signup Form</h5>

                <form onSubmit={signupForm.handleSubmit}>

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
    </div>
  )
}

export default SignUp;