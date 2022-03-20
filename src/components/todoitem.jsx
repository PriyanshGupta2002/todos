import React from 'react';

export default function Todoitem(props) {
  return <div className='my-5'>
      <h3>{props.todo.sNo} - {props.todo.title}</h3>
      <p>{props.todo.description}</p>
      <button type="button" class="btn btn-sm btn-outline-success" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
      <hr />
  </div>;
}
