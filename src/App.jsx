import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

const App = () => {

  const todos = [
    {input:"Do Coding !" , complete : true} ,
    {input:"Eat Oats and dry fruits." , complete : true} ,
    {input:"Study Physics and Computer science." , complete : false} ,
    {input:"Go to the GYM." , complete: false} ,
  ];

  return (
    <>
        <Header todos={todos}/>
        <Tabs todos={todos}/>
        <TodoList todos={todos}/>
        <TodoInput todos={todos}/>
    </>
  )
}

export default App;