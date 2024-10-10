import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";

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
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[1]}:{dex}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[2]}:{con}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[3]}:{int}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[4]}:{wis}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[5]}:{chr}
          <button>+</button>
          <button>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;
