import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
import * as Yup from 'yup';
import SignUp from './SignUp';
import useAppContext from '../../AppContext';

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .required('Required')
    .matches(/[0-9]/, 'Number is Required')
    .matches(/[a-z]/, 'LowerCase is Required')
    .matches(/[A-Z]/, 'UpperCase is Required')
    .matches(/[^\w]/, 'Special Character is Required'),
  confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords Must Match !')
    .required('Required')
});

const Login = () => {

  const navigate = useNavigate();
  const{setLoggedIn}=useAppContext();

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


    <div class="containe" id="containe">
      <div class="form-container log-in-container">
        <form onSubmit={loginForm.handleSubmit} action="#">
          <h1 className='log'>Login Now</h1>
          <div class="social-container">
            <a href="#" class="social"><i class="fa fa-facebook fa-2x"></i></a>
            <a href="#" class="social"><i class="fab fa fa-twitter fa-2x"></i></a>
          </div>
          <span>or use your account</span>

          <form onSubmit={loginForm.handleSubmit}>

            <label className='fw-medium' htmlFor="email">Email Address</label>
            <span className='text-danger ms-3'>{loginForm.touched.email && loginForm.errors.email}</span>
            <input type="text" id='email' onChange={loginForm.handleChange} value={loginForm.values.email} className='form-control mb-4' style={{ borderWidth: '2px', borderColor: '#391b7f' }} />

            <label className='fw-medium' htmlFor="password">Password</label>
            <span className='text-danger ms-3'>{loginForm.touched.password && loginForm.errors.password}</span>
            <input type="password" id='password' onChange={loginForm.handleChange} value={loginForm.values.password} className='form-control mb-4' style={{ borderWidth: '2px', borderColor: '#391b7f' }} />

            <a  href="#" >Forgot your password?</a>
          <button className='logg'>Log In</button>
          </form>

          
        </form>
        {/* <p className='fw-medium mb-5 mt-2'>New User ? <Link to={'/signup'} style={{color:'#391b7f'}}>Sign Up</Link></p> */}

      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>Welcome Back!!</h1>
            <p>To keep Connection with us please Login with your Personal Information </p>
          </div>
        </div>
      </div>
    </div>)
}

export default Login;
