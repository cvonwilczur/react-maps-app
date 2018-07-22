import React from 'react';
import './Markerinfobox.css';

const MarkerInfobox = (props) => {
  return (
    <div className="markerinfobox">{props.name} {props.address}</div>
)}

export default MarkerInfobox;
