import React from 'react';

const ToDoList = (props) => {
  return (
    <>
      <div className="todo__style">
        <li>{props.text}</li>

        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />

        
      </div>
    </>
  );
};

export default ToDoList;
