

// import React from "react";
// import { useSelector } from "react-redux"; // please import
import { useState } from 'react'
import styled from 'styled-components'

const TodoItem = () => {
  return (
    <div>
      <h1> TodoItem </h1>
    </div>
  )
}

const TodoList = () => {
  return (
    <div>
      <h1> ToDoList </h1>
    </div>
  )
}

const ContainerToDoForm = styled.div` 
width: 100%;
height: 100%;
background-color: teal;
`;

const ToDoForm = () => {
  // todos
  const [todos, setTodos] = useState('');

  // handler onChange
  const onChangeHandler = ({target: {value}}) => {
    setTodos(value)
  };

  // handler onClick
  const onClickHandler = ({target: {value}}) => {
    console.log("ayam")
  };

  return (
    <div>
      <ContainerToDoForm>
        <input 
        value = {todos}
        onChange={onChangeHandler()} />
        <button onClick={onClickHandler()} > Add To Do List</button>
      </ContainerToDoForm>
    </div>
  )
}

const ContainerApp = styled.div` 
width: 100%;
height: 100%;
background-color: beige;
`;

const App = () => {
  // const counterStore = useSelector((state) => state); // please add
  // console.log(counterStore); // Shall we look up the store?

  return (
    <div>
      <ContainerApp>
        <h1>To Do List</h1>
        <ToDoForm/>
        <TodoList/>
        <TodoItem/>
      </ContainerApp>
    </div>
  )
}

export default App;