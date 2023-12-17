import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

const UpdateUser = () => {

    const {id} = useParams();

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
        <h1>{id}</h1>
    </div>
  )
}

export default UpdateUser;