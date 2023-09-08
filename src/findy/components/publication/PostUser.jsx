import React from 'react'
import { useSelector } from 'react-redux';

import likes from "../../../assets/publications-icons/likes.svg";
import comments from "../../../assets/publications-icons/comments.svg";
import save from "../../../assets/publications-icons/save.svg";
import send from "../../../assets/publications-icons/send.svg";

export const PostUser = () => {

    const {newPost} = useSelector(state => state.findy); 
    const {displayName, photoURL} = useSelector (state => state.auth)

  return (
    <div className="home-feed-container">      
    {newPost.map((post) => (
      <div key={post.id} className="home-feed-item">
        <div className="user-info">
          <img src={photoURL} alt={`Avatar ${displayName}`} className="user-avatar" />
          <span className="username">{displayName}</span>
        </div>
        <img src={post.imageURL} alt={`Post ${post.id}`} className="post-image" />
        <div className="post-actions">
         
            <div className='actions-left'>
              <img src={likes} alt="" className="action-icon" />
              <img src={comments} alt="" className="action-icon" />
              <img src={send} alt="" className="action-icon" />
            </div>
            <div className='actions-right'>
              <img src={save} alt="" className="action-icon" />
            </div>
          </div>
       
        <div className="post-details">
          <span className="likes-count"> likes</span>
          <p className="post-caption">{post.description}</p>
          <span className="view-comments">View all comments</span>
        </div>
      </div>
    ))}
  </div>
  )
}
