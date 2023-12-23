import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
// import toast from 'react-hot-toast';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
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

const Login = () => {

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
        method : 'POST',
        body : JSON.stringify(values),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      console.log(response.status);
      console.log(response.statusText);

      if (response.status === 200) {
        enqueueSnackbar('LoggedIn Successfully', {variant: 'success'});
      }
      else if(response.status === 401){
        enqueueSnackbar('Email or Password is Incorrect', {variant: 'error'});
      }
      else{
        enqueueSnackbar('Something Went Wrong', {variant: 'error'});
      }

    },
    validationSchema: LoginSchema
  });



  return (
    <div className='background'> 

    <div className="container">
      
    </div>
     
    </div>
  )
}

export default Login;