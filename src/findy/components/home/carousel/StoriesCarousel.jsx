import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Home.scss'


const StoriesCarousel = ({ users }) => {


  return (
    <div className="carousel-container">
      {users.map((user) => (
        <div key={user.id} className={`story-avatar ${user.isActive ? 'active' : ''}`}>
          <img src={user.avatar} alt={`Avatar ${user.name}`} />
        </div>
      ))}
    </div>
  );
};

export default StoriesCarousel;