import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";

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
          Strength:
          {str}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          Dexterity:
          {dex}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          Constitution:
          {con}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          Intelligence:
          {int}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          Wisdom:
          {wis}
          <button>+</button>
          <button>-</button>
        </div>
        <div>
          Charisma:
          {chr}
          <button>+</button>
          <button>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;
