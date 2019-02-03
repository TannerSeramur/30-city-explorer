import React from 'react';
import Card from './Card';

export default function Deck({ details, type }) {
  // console.log(details);

  return (
    <div>
      <h3>Results from the API</h3>
      {details.map(item => {
        return <Card key={item.id} details={item} type={type} />;
      })};
    </div>
  );
}
