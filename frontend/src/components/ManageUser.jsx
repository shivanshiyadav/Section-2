import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageUser = () => {

  const [userArray, setUseArray] = useState([]);

  const getUserData = async () => {
    const res = await fetch('http://localhost:5000/user/getall');
    console.log(res.status);

    const data = await res.json();
    console.table(data);
    setUseArray(data)

  }
  useEffect(() => {
    getUserData();

  }, []);

  const deleteUser =  async(id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/user/delete/'+id, {
      method:'DELETE',

    });
    console.log(res.status);
    getUserData();
    toast.success('User Delete Sucessfully');
  }
  const displayUserData = () => {
    if (userArray.length) {
      return userArray.map((user) => {
        return <tr>
          <td>{user._id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.location}</td>
          <td>{user.password}</td>
          <td>{user.delete}</td>
          <td>
             <button onClick={() => { deleteUser(user._id) }} className='btn btn-danger'>Delete User</button>
          </td>
          <td>
             <Link to ={'/updateuser/'+user._id} className='btn btn-primary'>Update</Link>
          </td>
        </tr>
      })
    }
  }
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Manage User</h1>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>LOCATION</th>
              <th>PASSWORD</th>
              <th>Delete</th>
              <th colSpan={2}>Action</th>

            </tr>
          </thead>
          <tbody>
            {displayUserData()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageUser