import { useEffect, useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts";
import { increaseAttribute, decreaseAttribute, modifierCalculator } from "./attributeHelpers";
import type { Attributes, Class } from "./types";

function App() {
  const [availableClasses, setAvailableClasses] = useState<string[]>([]);
  const [displayRequirements, setDisplayRequirements] =
    useState<boolean>(false);

  const [requiredStats, setRequiredStats] = useState<Attributes>();

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

  const handleClickedClass = (className) => {
    setDisplayRequirements(true);
    setRequiredStats(CLASS_LIST[className]);
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
          {ATTRIBUTE_LIST[0]}:{str} ({modifierCalculator(str)})
          <button onClick={() => increaseAttribute(str, setStr)}>+</button>
          <button onClick={() => decreaseAttribute(str, setStr)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[1]}:{dex} ({modifierCalculator(dex)})
          <button onClick={() => increaseAttribute(dex, setDex)}>+</button>
          <button onClick={() => decreaseAttribute(dex, setDex)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[2]}:{con} ({modifierCalculator(con)})
          <button onClick={() => increaseAttribute(con, setCon)}>+</button>
          <button onClick={() => decreaseAttribute(con, setCon)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[3]}:{int} ({modifierCalculator(int)})
          <button onClick={() => increaseAttribute(int, setInt)}>+</button>
          <button onClick={() => decreaseAttribute(int, setInt)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[4]}:{wis} ({modifierCalculator(wis)})
          <button onClick={() => increaseAttribute(wis, setWis)}>+</button>
          <button onClick={() => decreaseAttribute(wis, setWis)}>-</button>
        </div>
        <div>
          {ATTRIBUTE_LIST[5]}:{chr} ({modifierCalculator(chr)})
          <button onClick={() => increaseAttribute(chr, setChr)}>+</button>
          <button onClick={() => decreaseAttribute(chr, setChr)}>-</button>
        </div>
      </section>
      <section className="App-section">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ marginRight: "30px" }}>
        Available Classes:
        {Object.keys(CLASS_LIST).map((value) => (
              <div onClick={() => handleClickedClass(value)}>{value}</div>
        ))}
          </div>
          {displayRequirements && (
            <div>
              Attribute Requirements
              <div>Strength: {requiredStats["Strength"]}</div>
              <div>Dexterity: {requiredStats["Dexterity"]}</div>
              <div>Constitution: {requiredStats["Constitution"]}</div>
              <div>Intelligence: {requiredStats["Intelligence"]}</div>
              <div>Wisdom: {requiredStats["Wisdom"]}</div>
              <div>Charisma: {requiredStats["Charisma"]}</div>
            </div>
          )}
        </div>
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
