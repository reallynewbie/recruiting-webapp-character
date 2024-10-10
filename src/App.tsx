import { useEffect, useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";
import { increaseAttribute, decreaseAttribute } from "./attributeHelpers";

function App() {
  const [availableClasses, setAvailableClasses] = useState<string[]>([]);
  const classes = CLASS_LIST

  const statsMap = {
    Strength: {
      stat: str,
      setStat: setStr,
    },
    Dexterity: {
      stat: dex,
      setStat: setDex,
    },
    Constitution: {
      stat: con,
      setStat: setCon,
    },
    Intelligence: {
      stat: int,
      setStat: setInt,
    },
    Wisdom: {
      stat: wis,
      setStat: setWis,
    },
    Charisma: {
      stat: chr,
      setStat: setChr,
    },
  };

  useEffect(() => {
    let approvedClasses = [];
    Object.entries(CLASS_LIST).forEach(([className, classStats]) => {
      // Using every so we skip the check if we miss even one stat
      const statCheck = Object.entries(classStats).every(
        ([attributeName, attributeValue]) => {
          if (attributeName in statsMap) {
            if (statsMap[attributeName]["stat"] >= attributeValue) {
              return className;
            } else {
              return false;
            }
          } else {
            console.log("new attribute maybe?");
            return false;
          }
        }
      );
      if (statCheck) {
        approvedClasses.push(className);
      }
    });
    setAvailableClasses(approvedClasses);
  }, [str, dex, con, int, wis, chr]);

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
      <section className="App-section">
        Available Classes:
        {Object.keys(CLASS_LIST).map((value) => (
          <div>{value}</div>
        ))}
      </section>
      <section className="App-section">
        Meets Requirements For The Following Classes:
        {availableClasses.map((value) => (
          <div>{value}</div>
        ))}
      </section>
    </div>
  );
}

export default App;
