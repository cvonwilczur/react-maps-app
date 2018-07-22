import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <div>
      <ul locationsarray={props.locationsarray}>
        {props.locationsarray.map((location, i) => {
            return (
              <ListItem
                name={props.locationsarray[i].name}
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
