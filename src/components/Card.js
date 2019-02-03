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

  if(type === 'yelp') {
    const { url, name, rating, price, image_url } = details;
  
    return (
      <div className='yelpCard'>
        <a href={url}>{name}</a>
        <div>The average rating is {rating} out of 5 and the average cost is {price} out of 4</div>
        <img alt={name} src={image_url}></img>
      </div>
    );
  }

  if(type === 'meetup') {
    const { link, name, host, creation_date } = details;

    return (
      <div className='meetupCard'>
        <a href={link}>{name}</a>
        <div>Hosted by: {host}</div>
        <div>Created on: {creation_date}</div>
      </div>
    );
  }

  if(type === 'trails') {
    const { trail_url, name, location, length, condition_date, condition_time, conditions, stars, star_votes } = details;
    
    return (
      <div className='trailCard'>
        <div>Hike Name: <a href={trail_url}>{name}</a></div>
        <div>Location: {location}</div>
        <div>Distance: {length}</div>
        <div>On {condition_date} at {condition_time}, trail conditions were reported as: {conditions}</div>
        <div>This trail has a rating of {stars} stars (out of {star_votes} votes)</div>
      </div>
    );
  }

  if(type === 'movies') {
    const { title, released_on, total_votes, average_votes, popularity, image_url, overview } = details;
    
    return (
      <div className='moviesCard'>
        <div><span>{title}</span> was realeased on {released_on}.</div>
        <div>Out of {total_votes} total votes, {title} has an average vote of {average_votes} and a popularity score of {popularity}.</div>
        <img alt={title} src={image_url}></img>
        <div>{overview}</div>
      </div>
    );
  }
  
}
