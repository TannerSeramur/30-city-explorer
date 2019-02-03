import React from 'react';
import '../styles/card.scss';

export default function Card({ details, type }) {

  if (type === 'weather') {
    const { forecast, time } = details;

    return (
      <div className='weatherCard'>
        <div className='date'><b>{time}</b></div>
        <div>{forecast}</div>
      </div>
    );
  }

  // if(type === 'yelp'){

  // }
}
