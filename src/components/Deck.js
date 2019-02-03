import React from 'react';
import Card from './Card';
import '../styles/deck.scss';

export default function Deck({ details, type }) {
  // console.log(details);

  return (
    <div className="deck">
      <h3>{type} :</h3>
      {details.map(item => {
        return <Card key={item.id} details={item} type={type} />;
      })}
    </div>
  );
}
