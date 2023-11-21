import React, { useState } from 'react';
import postData from './postData';

const ListPost = () => {

    const [postArray, setPostArray] = useState(postData);

    const addLike = (index) => {
        const temp = postArray;
        temp[index].like++;
        setPostArray([...temp]);
    }

    return (
        <div>
            <div className='col-md-4 mx-auto'>

                {
                    postArray.map((post, index) => {
                        return <div className='card mb-4'>
                            <div className='card-header'>
                                <h4 className='m-0'>{post.author}</h4>
                                <p className='m-0'>
                                    {post.postedOn.toLocaleTimeString()},
                                    &nbsp;{post.postedOn.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}
                                </p>
                            </div>
                            <div className='card-body'>
                                <p className='m-0'>{post.content}</p>
                            </div>

                            <img className='img-fluid' src={post.image} alt="" />

                            <div className='p-3'>
                                <span>{post.like} Likes</span>&nbsp;&middot;&nbsp;
                                <span>{post.comment} Comments</span>&nbsp;&middot;&nbsp;
                                <span>{post.share} Shares</span> &nbsp;
                            </div>

                            <div className='card-footer'>
                                <div className="row">
                                    <div className="col-4">
                                        <button className='btn w-100' onClick={() => addLike(index)} > <i class="fa-regular fa-thumbs-up"></i> Like </button>
                                    </div>
                                    <div className="col-4">
                                        <button className='btn w-100'> <i class="fa-solid fa-comment"></i> Comment </button>
                                    </div>
                                    <div className="col-4">
                                        <button className='btn w-100'> <i class="fa-solid fa-share"></i> Share </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    })
                }

            </div>
        </div>
    )

}

export default ListPost;