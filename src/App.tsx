import React from 'react';
import './App.css';
import TodoList from './Todolist';
import Clock from './timer';

{/*
  작성자: kjm
  작성일 : 2025.04.07
  내용: 기능에 대한 내용
*/}

function App(){

  return (
    <>
      <div className="containel" >
        <TodoList/>
        <Clock/>
      </div>
    </>
  )
}

export default App;
