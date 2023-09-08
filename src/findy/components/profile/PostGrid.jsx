import React from 'react'
import { CardPost } from './CardPost'
import "./Profile.scss";
import { useFetchPosts } from '../../../hooks/useFetchPosts';
import { useSelector } from 'react-redux';


export const PostGrid = () => {
  const { isLoading} = useFetchPosts();
  const {newPost} = useSelector(state => state.findy);
 

    return (
    <>
        {isLoading && <h2>Cargando...</h2>}
    
        <div className="card-grid">
        {newPost.map((newPost) => (
          <CardPost key={newPost.id} {...newPost} />
        ))}
      </div>
    </>
  );
}
