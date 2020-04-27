import React from 'react';
import { Link } from 'react-router-dom';
import './card-style.css';
//import CardDeck from 'react-bootstrap/CardDeck';
//import Card from 'react-bootstrap/Card';

import img1 from '../../../img/vector-video-player-941434_1280.png';

const Card = () => {
  return (
    <div className='card text-center shadow'>
      <div className='overflow'>
        <img src={img1} alt='image 1/' className='card-img-top' />
      </div>
      <div className='card-body text dark'>
        <h4 className='card-tital'> Video Tital </h4>

        <a herf='#' className='btn btn-outline-success'>
          {' '}
          Go Anywhere
        </a>
      </div>
    </div>
  );
};
export default Card;
