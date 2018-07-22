import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <div>
      <ul locationsarray={props.locationsarray}>
        {props.locationsarray.map((location, i) => {
            return (
              <ListItem
                mapMarkerActive={props.mapMarkerActive}
                currentTargetkey={props.currentTargetkey}
                name={props.locationsarray[i].name}
                lat={props.locationsarray[i].location.lat}
                lng={props.locationsarray[i].location.lng}
                address={props.locationsarray[i].location.address}
                onClick={props.onClick}
                text={i}
                key={i}
              />
            );
          })
        }
      </ul>
    </div>
  );
}

export default List;
