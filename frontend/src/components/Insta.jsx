import React from 'react'

const Insta = ( ) => {  
  return (
    <div>
        <h1>insta</h1>
        <div className='container'>
            <div className="card">
                <img src="https://i0.wp.com/puppiesareprozac.com/wp-content/uploads/2009/07/Cute-funny-Chihuahua-dog-in-pink-sunglasses-Who-is-it-Tell-him-I%E2%80%99m-not-interested-unless-it%E2%80%99s-an-action-film..jpg?resize=375%2C500" alt="" />
            <div className="likes" onClick={(e) => {console.log(e.target.value)}}></div>

            </div>
        </div>
        
    </div>
  )
}

export default Insta;