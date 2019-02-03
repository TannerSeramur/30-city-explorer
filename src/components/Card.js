import React from 'react';

export default function Card(props) {
  const { forecast, time } = props.details;
  return (
    <div>
      <p>The Forecast for {time} is : {forecast} </p>
    </div>
  );
}
