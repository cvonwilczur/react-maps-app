import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <div>
      <ul locationsArray={props.locationsArray}>
        {props.locationsArray.map((location, i) => {
            return (
              <ListItem
                name={props.locationsArray[i].name}
                text={i}
              />
            );
          })
        }
      </ul>
    </div>
  );
}

export default List;
