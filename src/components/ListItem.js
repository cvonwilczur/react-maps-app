import React from 'react';

const ListItem = (props) => {
  return(
    <li
      tabIndex={props.text+10}
      className={props.text === props.currentTargetkey && props.mapMarkerActive === true ? 'highlight' : null}
      onClick={e => props.onClick(props.lat, props.lng, props.name, props.address, props.text)}
      onFocus={e => props.onClick(props.lat, props.lng, props.name, props.address, props.text)}
      // aria-label="Restaurant"
      >
      {props.name}
      {props.text === props.currentTargetkey && props.mapMarkerActive === true ? props.address : null}
    </li>
)}

export default ListItem;
