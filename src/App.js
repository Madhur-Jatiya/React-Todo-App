import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from './MyComponents/AddTodo';
import { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Study",
      desc: "Study time 11am-5pm"
    },
    {
      sno: 2,
      title: "Game",
      desc: "Game time 7pm-9pm"
    },
    {
      sno: 3,
      title: "Chat",
      desc: "Chatting time 10am-12am"
    },
  ]);

  return (
    <>
      <Header title="MyTodosList" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
