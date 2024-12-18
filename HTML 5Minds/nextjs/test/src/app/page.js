"use client";
import { useState } from "react; 
export default function Home() {
  
  function coun(){
    setCounter(counter+1);
  }
  
  const [counter, setCounter] = useState(19)
  return (
    <div>
      <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
      <h6>densetu no onara masuta</h6>
      <p>________________________________________________________________________________________________</p>
      <p>________________________________________________________________________________________________</p>
      <button onClick={coun}>click.</button>
      <p>________________________________________________________________________________________________</p>
      <div>{counter}</div>
    </div>
  );
}