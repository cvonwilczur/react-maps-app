import React from 'react';

const MarkerInfobox = (props) => {
  return (
    <div className="MarkerInfobox">{props.name}
      <br></br>
      {props.address}</div>
)}

export default MarkerInfobox;
