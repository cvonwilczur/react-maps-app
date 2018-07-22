import React from 'react';
import './MapMarkers.css';



const Mapmarker = (props) => {
return(
  <div
    onClick={e => props.onClick(props.lat, props.lng)}
    className="mapmarker">
    {props.text}
  </div>
)
}

export default Mapmarker;
