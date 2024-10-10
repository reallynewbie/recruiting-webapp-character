import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";
import { increaseAttribute, decreaseAttribute } from "./attributeHelpers";

function App() {
  const [str, setStr] = useState<number>(0);
  const [dex, setDex] = useState<number>(0);
  const [con, setCon] = useState<number>(0);
  const [int, setInt] = useState<number>(0);
  const [wis, setWis] = useState<number>(0);
  const [chr, setChr] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          {ATTRIBUTE_LIST[0]}:{str}
          <button onClick={() => increaseAttribute(str, setStr)}>+</button>
          <button onClick={() => decreaseAttribute(str, setStr)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[1]}:{dex}
          <button onClick={() => increaseAttribute(dex, setDex)}>+</button>
          <button onClick={() => decreaseAttribute(dex, setDex)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[2]}:{con}
          <button onClick={() => increaseAttribute(con, setCon)}>+</button>
          <button onClick={() => decreaseAttribute(con, setCon)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[3]}:{int}
          <button onClick={() => increaseAttribute(int, setInt)}>+</button>
          <button onClick={() => decreaseAttribute(int, setInt)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[4]}:{wis}
          <button onClick={() => increaseAttribute(wis, setWis)}>+</button>
          <button onClick={() => decreaseAttribute(wis, setWis)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[5]}:{chr}
          <button onClick={() => increaseAttribute(chr, setChr)}>+</button>
          <button onClick={() => decreaseAttribute(chr, setChr)}>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;
