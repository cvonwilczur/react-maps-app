import React from 'react';

const ListItem = (props) => {
  return(
    <li
      tabIndex={props.text+10}
      className={props.text === props.currentTargetkey && props.mapMarkerActive === true ? 'highlight' : null}
      onClick={e => props.onClick(props.lat, props.lng, props.name, props.address, props.text)}
      onKeyUp={e => (e.key === "Tab") ? props.onClick(props.lat, props.lng, props.name, props.address, props.text) : null }
      >
      {props.name}
      <br></br>
      {props.text === props.currentTargetkey && props.mapMarkerActive === true ? 'Address: '+props.address : null}
    </li>
)}

export default ListItem;
