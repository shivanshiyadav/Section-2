import React, { useEffect } from 'react'

const ManageUser = () => {
    const getUserData = async()=>{
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);

        const data =await res.json();
        console.table(data);
        

    }
    useEffect(()=> {
        getUserData();
    
    },[])
  return (
    <div>ManageUser</div>
  )
}

export default ManageUser