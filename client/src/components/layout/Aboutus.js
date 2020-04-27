import React, { Component } from 'react';
import Card from './cards/CardsUI';
import './cards/card-style.css';

class Aboutus extends Component {
  render() {
    return (
      <section>
        <div className='about-us'>
          <div className='.about-inner'>
            <h1 className='x-large'> About Us </h1>
            <p className='lead'>
              Crowd Sourcing for Pakistan sign language corpus
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutus;
