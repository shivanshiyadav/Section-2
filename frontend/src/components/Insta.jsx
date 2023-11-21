import React, { useState } from 'react'

const Insta = () => {
  let likes = 0;


  // a - readonly , b - update function
  
  const [Likes, setLikes] = useState(0);
  const [comment, setcomment] = useState(0)
  
  
  return (
    <div><h1 className='text-center m-0 p-0'>Instagram <i class="fa-brands fa-instagram"></i></h1>
    <div className="container">
<div className="card">
  <img className='flower' src="https://images.news18.com/ibnlive/uploads/2022/12/odi-world-cup-trophy-reuters.jpg" alt="" />
  
  <h4 className='p-0'>Likes : {Likes}</h4>
 
 <h1 className='like' onClick={ () => { setLikes(Likes+1); } }><i class="fa-solid fa-heart m-2"></i><i class="fa-regular fa-comment m-2"></i><i class="fa-brands fa-telegram m-2"></i></h1>{/* <h1 className='comnt'onClick={ () => { setcomment(comment+1); } } ><i class="fa-regular fa-comment"></i></h1><h1 className='share'onClick={ () => { setcomment(share+1); } } ><h1 className='comnt'onClick={ () => { setcomment(comment+1); } } ><i class="fa-brands fa-telegram"></i></h1></h1> */}
<h6>Liked by Akshita_24 and others</h6>
<h6a><span className='fw-5'>itsashishgupta</span> Indiaaaa Indiaaa❤️❤️!!!</h6a>
<h6>A loss in a game, but a win in our heart salute to the spirit✨✨</h6>
<h6>view all 58 comments</h6>
<h6>5 hours ago</h6>
</div>
<div className="card">
  <img className='flower' src="https://i.guim.co.uk/img/media/dce21f9b2014c57cfdbbf3c3f2e8a4f36682de9b/35_62_1721_1033/master/1721.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=e8d67229c765fa2209b9163788f63d54" alt="" />
  
  <h4 className='p-0'>Likes : {Likes}</h4>
 
 <h1 className='like' onClick={ () => { setLikes(Likes+1); } }><i class="fa-solid fa-heart m-2"></i><i class="fa-regular fa-comment m-2"></i><i class="fa-brands fa-telegram m-2"></i></h1>{/* <h1 className='comnt'onClick={ () => { setcomment(comment+1); } } ><i class="fa-regular fa-comment"></i></h1><h1 className='share'onClick={ () => { setcomment(share+1); } } ><h1 className='comnt'onClick={ () => { setcomment(comment+1); } } ><i class="fa-brands fa-telegram"></i></h1></h1> */}
<h6>Liked by Subhmangill and others</h6>
<h6a><span className='fw-5'>thisisgupta</span>You have Played with great spirit Team India💖!!!</h6a>
<h6>khtam ho gya matter bro🥲👍</h6>
<h6>god ji agar India jeet gyi to pkka Monday se Padahi start🙏🥹</h6>
<h6>view all 58 comments</h6>
<h6>5 hours ago</h6>
</div>
<div className="card">
  <img className='flower' src="https://cdn.odds.prod.apse2.np-pas.com/wp-content/uploads/2023/09/28055834/GettyImages-1692942856-836x470.jpg" alt="" />
  
  <h4 className='p-0'>Likes : {Likes}</h4>
 
 <h1 className='like' onClick={ () => { setLikes(Likes+1); } }><i class="fa-solid fa-heart m-2"></i><i class="fa-regular fa-comment m-2"></i><i class="fa-brands fa-telegram m-2"></i></h1>{/* <h1 className='comnt'onClick={ () => { setcomment(comment+1); } } ><i class="fa-regular fa-comment"></i></h1><h1 className='share'onClick={ () => { setcomment(share+1); } } ><h1 className='comnt'onClick={ () => { setcomment(comment+1); } } ><i class="fa-brands fa-telegram"></i></h1></h1> */}
<h6>Liked by ladygaba and others</h6>
<h6a><span className='fw-5'>maigupta</span>paisa dub gya mera😭</h6a>
<h6>Jai shree Allha hu Jesus da Khalsa holy spirit di fateh🙏 🪯🕉️☪️✝️</h6>
<h6>koi mjhe revive do </h6>
<h6>view all 98 comments</h6>
<h6>1 hours ago</h6>
</div>
    </div>
    </div>
  )
}

export default Insta;