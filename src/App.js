import React from "react";
import "./components/Greet";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Test from "./components/Test"
import FunctionClick from "./components/FunctionClick"
import ClassClick from "./components/ClassClick"
import EventBind from "./components/EventBind"

function App() {
  return (
    <div className='App'>
      {/* <FunctionClick/>
      <ClassClick/>
      <EventBind/> */}

      <div className='flex flex-row justify-center'>
        <p className='text-4xl text-blue-500'>
          Hello Nishant
      </p>
      </div>
      {/* <Counter/> */}
      {/* <Message/> */}
      {/* <Greet name='Nishant' heroName='Batman'>
        <p> This is a child prop</p>
      </Greet>
      <Greet name='Ranjan' heroName='Ironman'>
        <button> Action </button>
      </Greet> */}
      {/* <Greet name='Diana' heroName='Wonder woeman' /> */}
      {/* <Welcome name='Nishant' heroName='Shaktiman'>
        <p> This is child prop of class components</p>
      </Welcome>
      <Welcome name='AKhil' heroName='Hulk'>
        <button>Action</button>
      </Welcome> */}
    </div>
  );
}

export default App;
