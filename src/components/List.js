import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  return (
    <div>
      <ul antiqueArray={props.antiqueArray}>
        {props.antiqueArray.map((location, i) => {
            return (
              <ListItem
                name={props.antiqueArray[i].name}
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
