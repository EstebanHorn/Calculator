import "./App.css";
import logo from "./assets/Logo.png";
import Button from "./components/Button";
import ButtonClear from "./components/ButtonClear";
import Screen from "./components/Screen";
import { useState } from "react";
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const result = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert('add any input')
    }
    
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="calculator-container">
        <Screen input={input} />
        <div className="row">
          <Button click={addInput}>1</Button>
          <Button click={addInput}>2</Button>
          <Button click={addInput}>3</Button>
          <Button click={addInput}>+</Button>
        </div>
        <div className="row">
          <Button click={addInput}>4</Button>
          <Button click={addInput}>5</Button>
          <Button click={addInput}>6</Button>
          <Button click={addInput}>-</Button>
        </div>
        <div className="row">
          <Button click={addInput}>7</Button>
          <Button click={addInput}>8</Button>
          <Button click={addInput}>9</Button>
          <Button click={addInput}>*</Button>
        </div>
        <div className="row">
          <Button click={addInput}>0</Button>
          <Button click={addInput}>.</Button>
          <Button click={result}>=</Button>
          <Button click={addInput}>/</Button>
        </div>
        <div className="row">
          <ButtonClear click={() => setInput("")} />
        </div>
      </div>
    </div>
  );
}

export default App;
