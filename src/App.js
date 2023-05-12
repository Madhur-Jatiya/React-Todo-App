import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

function App() {

  const onDelete = () => {
    console.log("I am ondelete");
  }

  let todos = [
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
  ]
  return (
    <>
      <Header title="Madhur" />
      <Todos todos={todos} onDelete = {onDelete}/>
      <Footer />
    </>
  );
}

export default App;
