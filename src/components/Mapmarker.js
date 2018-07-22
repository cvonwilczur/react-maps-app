import React from 'react';
import './MapMarkers.css';



const Mapmarker = (props) => {
return(
  <div
    className={props.text === props.currentTargetkey && props.mapMarkerActive === true ? 'active mapmarker' : 'mapmarker'}
    onClick={e => props.onClick(props.lat, props.lng, props.name, props.address, props.text)}>
    {props.text}
  </div>
)
}

export default Mapmarker;
