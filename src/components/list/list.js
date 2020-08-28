import React from 'react';
import Item from '../item/item';
import './list.css';

const List = ({dataArr, onDeleted}) => {
  const add = dataArr.map((item) => {
    const {id, ...otherItems} = item;
    return (
      <li className="list-group-item" key={id}>
        <Item
          {...otherItems}
          onDeleted={() => onDeleted(id)}/>
      </li>
    );
  });


  return (
    <ul className="todo-list list-group">
      {add}
    </ul>
  );
};

export default List;