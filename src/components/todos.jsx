import React from 'react';
import Todoitem from './todoitem';

export default function Todos(props) {

  return <div className='container mt-3' style={{minHeight:"50.2vh"}}>
      <h3 className=' text-center'>Todos</h3>
      {props.todo.length===0?"No Todos To show":
      props.todo.map((todo)=>{
        return <Todoitem todo={todo} onDelete={props.onDelete}/>
      })
}
       </div>;
}
