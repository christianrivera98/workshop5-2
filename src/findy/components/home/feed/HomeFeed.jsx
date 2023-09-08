import React from "react";
import "../styles/Home.scss";
import likes from "../../../../assets/publications-icons/likes.svg";
import comments from "../../../../assets/publications-icons/comments.svg";
import save from "../../../../assets/publications-icons/save.svg";
import send from "../../../../assets/publications-icons/send.svg";
import { PostUser } from "../../publication/PostUser";
import { useSelector } from "react-redux";

const HomeFeed = ({ posts }) => {

  
  const {newPost} = useSelector(state => state.findy);
 
  return (
    <div className="home-feed-container">
      {!!newPost ? <PostUser /> : null}
      {posts.map((post) => (
        <div key={post.id} className="home-feed-item">
          <div className="user-info">
            <img
              src={post.avatar}
              alt={`Avatar ${post.username}`}
              className="user-avatar"
            />
            <span className="username">{post.username}</span>
          </div>
          <img
            src={post.image}
            alt={`Post ${post.id}`}
            className="post-image"
          />
          <div className="post-actions">
            <div className="actions-left">
              <img src={likes} alt="" className="action-icon" />
              <img src={comments} alt="" className="action-icon" />
              <img src={send} alt="" className="action-icon" />
            </div>
            <div className="actions-right">
              <img src={save} alt="" className="action-icon" />
            </div>
          </div>

          <div className="post-details">
            <span className="likes-count">{post.likes} likes</span>
            <p className="post-caption">{post.caption}</p>
            <span className="view-comments">
              View all {post.comments} comments
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFeed;
