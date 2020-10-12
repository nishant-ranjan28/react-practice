import React from "react";
import "./App.css";
import "./components/Greet";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message"
import Counter from "./components/Counter"

function App() {
  return (
    <div className='App'>

      <Counter/>

      {/* <Message/> */}
      
      {/* <Greet name='Nishant' heroName='Batman'>
        <p> This is a child prop</p>
      </Greet>
      <Greet name='Ranjan' heroName='Ironman'>
        <button> Action </button>
      </Greet>
      <Greet name='Akhil' heroName='Wonder woeman' />

      <Welcome name='Nishant' heroName='Shaktiman'>
        <p> This is child prop of class components</p>
      </Welcome>
      <Welcome name='AKhil' heroName='Kilmis'>
        <button>Action</button>
      </Welcome> */}
    </div>
  );
}

export default App;
