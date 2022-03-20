import React,{useState} from 'react';

export default function AddTodo(props) {
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");

    const submit =(e)=>{
        e.preventDefault()
        if (!title || !description) {
            alert("All fields are mandatory")
        }
        else{
            props.addTodo(title,description)
        }
    }
  return <>
  <form className='container mt-3' onSubmit={submit}>
      <h2 className='text-center'>Add a todo to your todo list</h2>
  <div class="mb-3">
    <label for="Title" class="form-label">Title</label>
    <input type="text" class="form-control"  value={title} onChange={(e)=>{settitle(e.target.value)}} id="Title"/>
  </div>
  <div class="mb-3">
    <label for="Description" class="form-label">Description</label>
    <input type="text" class="form-control" value={description} onChange={(e)=>{setdescription(e.target.value)}}  id="Description"/>
  </div>

  <button type="submit" class="btn btn-sm btn-outline-primary" >Submit</button>
</form>
<hr />
</>
}
