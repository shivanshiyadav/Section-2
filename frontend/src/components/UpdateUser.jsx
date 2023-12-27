import { Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateUser = () => {

    const { id } = useParams();

    const [userData, setUserData] = useState(null);

    const getUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getbyid/' + id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);

        setUserData(data);
    }

    useEffect(() => {
        getUserData();
    }, [])

    const submitForm = async (values, { resetForm }) => {
        console.log(values);

        //send req to backend/Rest API
        const response = await fetch('http://localhost:5000/user/update/' + id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response.status);
        console.log(response.statusText);

        if (response.status === 200) {
            enqueueSnackbar('Registered Successfully', { variant: 'success' });
        } else {
            enqueueSnackbar('Something Went Wrong', { variant: 'error' });
        }

    }

    return (
        <div style={{ fontFamily: 'Montserrat' }}>
            <div className='container text-center'>
                <div>
                    <h1 className='display-3 my-5 fw-bold'>Update User</h1>
                </div>

                <div className="card border-0" style={{ backgroundColor: '#d9c0c1' }}>

                    <div className="card-body" >

                        {
                            userData !== null ? (
                                <Formik initialValues={userData} onSubmit={submitForm} >
                                    {
                                        ({ values, handleChange, handleSubmit, errors, touched }) => {
                                            return <form onSubmit={handleSubmit}>

                                                <label className='fw-medium' htmlFor="name">Name</label>
                                                <span className='text-danger ms-3'>{touched.name && errors.name}</span>
                                                <input type="text" id='name' onChange={handleChange} value={values.name} className='form-control mb-4' style={{ borderWidth: '2px', borderColor: '#391b7f' }} />

                                                <label className='fw-medium' htmlFor="email">Email Address</label>
                                                <span className='text-danger ms-3'>{touched.email && errors.email}</span>
                                                <input type="text" id='email' onChange={handleChange} value={values.email} className='form-control mb-4' style={{ borderWidth: '2px', borderColor: '#391b7f' }} />

                                                <label className='fw-medium' htmlFor="password">Password</label>
                                                <span className='text-danger ms-3'>{touched.password && errors.password}</span>
                                                <input type="password" id='password' onChange={handleChange} value={values.password} className='form-control mb-4' style={{ borderWidth: '2px', borderColor: '#391b7f' }} />

                                                <label className='fw-medium' htmlFor="location">Location</label>
                                                <span className='text-danger ms-3'>{touched.location && errors.location}</span>
                                                <input type="text" id='location' onChange={handleChange} value={values.location} className='form-control mb-4' style={{ borderWidth: '2px', borderColor: '#391b7f' }} />

                                                <button type='submit' className='btn btn-primary w-100 my-4 border-0' style={{ backgroundColor: '#391b7f', color: 'white' }}>Submit</button>

                                            </form>
                                        }
                                    }
                                </Formik>
                            ) : (<h1 className='my-5 text-center text-muted'>Loading User Data...</h1>)
                        }





                    </div>

                </div>

            </div>
        </div>
    )
}

export default UpdateUser;