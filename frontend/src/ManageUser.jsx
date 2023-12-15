import React, { useEffect, useState } from 'react'

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
  const deleteUser = (id) => {
    console.log(id);
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
          <td>
            < button onClick={() => { deleteUser(user._id) }} className='btn btn-danger'>Delete User</>
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