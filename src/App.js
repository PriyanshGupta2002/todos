import React, { useState, useEffect } from "react";
import AddTodo from "./components/addTodo";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Todos from "./components/todos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./components/About";
function App() {
  let initTodo = [];



  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


 
  

  //Delete from todo list
  const onDelete = (todo) => {
    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };


  //Add todos to todo list
  const addTodo = (title, description) => {
    let sNo;
    if (todos.length === 0) {
      sNo = 1;
    } else {
      sNo = todos[todos.length - 1].sNo + 1;
    }
    let newTodo = {
      sNo: sNo,
      title: title,
      description: description,
    };
    settodos([...todos, newTodo]);
  };

  //Use effect hook for saving any changes to local storage
  const [todos, settodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Router>

      <Navbar title="ApniTodo" />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddTodo addTodo={addTodo} />
              <Todos todo={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
 

      <Footer />
      </Router>
  );
}

export default App;
