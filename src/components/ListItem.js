import React from 'react';
import './Listitem.css';

const ListItem = (props) => {
  return(
    <li
      className={props.text === props.currentTargetkey && props.mapMarkerActive === true ? 'highlight' : null}
      onClick={e => props.onClick(props.lat, props.lng, props.name, props.address, props.text)}>
      {props.text}
      {props.name}
      {props.text === props.currentTargetkey && props.mapMarkerActive === true ? props.address : null}
    </li>
)}

export default ListItem;
