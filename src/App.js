import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("I am ondelete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
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
      <Header title="MyTodo" />
      <Todos todos={todos} onDelete={onDelete} /> 
      <Footer />
    </>
  );
}

export default App;
