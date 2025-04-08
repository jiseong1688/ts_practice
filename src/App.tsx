import React from 'react';
import './App.css';
import ClassCom from './ClassCom';
import FuncCom from './FuncCom';

{/*
  작성자: kjm
  작성일 : 2025.04.07
  내용: 기능에 대한 내용
*/}

function App(){
  let name = "리액트";
  const style = {
    background: "blueviolet",
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "20px"
  };

  return (
    <>
      <div className="containel" >
        {/* <h1 style = {style} >Hello
          {
            name === "리액트" ? (<h1>YES</h1>): null
          }!!
        </h1>
        // {/* <p>반갑습니다.</p> 
        <br/> */}
        <ClassCom/>
        <FuncCom/>
      </div>
    </>
  )
}

export default App;
