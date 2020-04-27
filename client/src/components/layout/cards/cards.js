import React, { Component } from 'react';
import Card from './CardsUI';
import './card-style.css';

class Cards extends Component {
  render() {
    return (
      <section>
        <div className='containier-fluid d-flex justify-content-center'>
          <div className='col'>
            <div className='row'>
              <div className='col-md-4'>
                {' '}
                <Card />
              </div>
              <div className='col-md-4'>
                <Card />
              </div>
              <div className='col-md-4'>
                <Card />
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            <div className='col-md-4'>
              {' '}
              <Card />
            </div>
            <div className='col-md-4'>
              <Card />
            </div>
            <div className='col-md-4'>
              <Card />
            </div>
          </div>
        </div>

        <div className='containier-fluid d-flex justify-content-center'>
          <a herf='#' className='btn btn-Success'>
            Search
          </a>
        </div>
      </section>
    );
  }
}

export default Cards;
