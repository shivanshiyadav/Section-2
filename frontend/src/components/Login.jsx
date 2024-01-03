import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
import * as Yup from 'yup';
// import SignUp from './SignUp';
import useAppContext from '../../AppContext';

const LoginSchema = Yup.object().shape({

  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .required('Required')
    .matches(/[0-9]/, 'Number is Required')
    .matches(/[a-z]/, 'LowerCase is Required')
    .matches(/[A-Z]/, 'UpperCase is Required')
    .matches(/[^\w]/, 'Special Character is Required')
});

const Login = () => {

  const navigate = useNavigate();
  const { setLoggedIn } = useAppContext();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values));
      console.log(values);

      //send req to backend/Rest API
      const response = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('LoggedIn Successfully', { variant: 'success' });
        const data = await response.json();
        console.log(data);

        //to save user data in session 
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/manage');
      }
      else if (response.status === 401) {
        enqueueSnackbar('Email or Password is Incorrect', { variant: 'error' });
      }
      else {
        enqueueSnackbar('Something Went Wrong', { variant: 'error' });
      }

    },
    validationSchema: LoginSchema
  });



  return (


    <div className="containe" id="containe">
      <div className="form-container log-in-container">
        <form onSubmit={loginForm.handleSubmit} >
          <h1 className='log'>Login Now</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fa fa-facebook fa-2x"></i></a>
            <a href="#" className="social"><i className="fab fa fa-twitter fa-2x"></i></a>
          </div>
          <s pan>or use your account</s>
          <label className='fw-medium' htmlFor="email">Email Address</label>
          <span className='text-danger ms-3'>{loginForm.touched.email && loginForm.errors.email}</span>
          <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-4' style={{ borderWidth: '2px', borderColor: '#391b7f' }} />
          <label className='fw-medium' htmlFor="password">Password</label>
          <span className='text-danger ms-3'>{loginForm.touched.password && loginForm.errors.password}</span>
          <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-4' style={{ borderWidth: '2px', borderColor: '#391b7f' }} />
          <a href="#" >Forgot your password?</a>
          <button type='submit' className='logg'>Log In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Welcome Back!!</h1>
            <p>To keep Connection with us please Login with your Personal Information </p>
          </div>
        </div>
      </div>
    </div>)
}

export default Login;
