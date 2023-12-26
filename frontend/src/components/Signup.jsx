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
    <div>
    <div class="containerw">
      
	<div class="screen">
		<div class="screen__content">
   
			{/* <form class="login2">
      <h1>Sign In Now</h1>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"/>
				</div>
				<button class="button login__submit">
					<span class="button__text">SigIn Now</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form> */}
      <form onSubmit={signupForm.handleSubmit} className='login2'>
      <h1>Sign In Now</h1>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
<label className='fw-medium' htmlFor="name">Name</label>
<span className='text-danger ms-3'>{signupForm.touched.name && signupForm.errors.name}</span>
<input type="text" id='name' onChange={signupForm.handleChange} value={signupForm.values.name} className='form-control mb-4' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>
</div>
<label className='fw-medium' htmlFor="email">Email Address</label>
<span className='text-danger ms-3'>{signupForm.touched.email && signupForm.errors.email}</span>
<input type="text" id='email' onChange={signupForm.handleChange} value={signupForm.values.email} className='form-control mb-4' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

<label className='fw-medium' htmlFor="password">Password</label>
<span className='text-danger ms-3'>{signupForm.touched.password && signupForm.errors.password}</span>
<input type="password" id='password' onChange={signupForm.handleChange} value={signupForm.values.password} className='form-control mb-4' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

<label className='fw-medium' htmlFor="confirm">Confirm Password</label>
<span className='text-danger ms-3'>{signupForm.touched.confirm && signupForm.errors.confirm}</span>
<input type="password" id='confirm' onChange={signupForm.handleChange} value={signupForm.values.confirm} className='form-control mb-4' style={{borderWidth:'2px' ,borderColor: '#391b7f'}}/>

<button type='submit' className='btn btn-primary w-100 my-4 border-0' style={{backgroundColor: '#391b7f', color:'white'}}>Submit</button>

</form>

			<div class="social-login">
				<h3>signIn via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
  )
}

export default SignUp;