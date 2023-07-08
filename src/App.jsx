import "./App.css";
import { useEffect, useState } from "react";
import { CLASS_LIST } from "./consts";
function App() {
  // states to store the values of attributes
  let [strength, setStrength] = useState(8);
  let [dexterity, setDexterity] = useState(11);
  let [constitution, setConstitution] = useState(12);
  let [intelligence, setIntelligence] = useState(13);
  let [wisdom, setWisdom] = useState(10);
  let [charisma, setCharisma] = useState(12);

  // hovering
  const [showClassDetails, setShowClassDetails] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const ATTRIBUTE_LIST = [
    { name: "Strength", value: strength },
    { name: "Dexterity", value: dexterity },
    { name: "Constitution", value: constitution },
    { name: "Intelligence", value: intelligence },
    { name: "Wisdom", value: wisdom },
    { name: "Charisma", value: charisma },
  ];

  // incrementing the numbers
  const increment = (comp) => {
    if (comp == "Strength") {
      setStrength(++strength);
    } else if (comp == "Dexterity") {
      setDexterity(++dexterity);
    } else if (comp == "Constitution") {
      setConstitution(++constitution);
    } else if (comp == "Intelligence") {
      setIntelligence(++intelligence);
    } else if (comp == "Wisdom") {
      setWisdom(++wisdom);
    } else if (comp == "Charisma") {
      setCharisma(++charisma);
    }
  };

  // deccrementing the numbers
  const decrement = (comp) => {
    if (comp == "Strength") {
      setStrength(--strength);
    } else if (comp == "Dexterity") {
      setDexterity(--dexterity);
    } else if (comp == "Constitution") {
      setConstitution(--constitution);
    } else if (comp == "Intelligence") {
      setIntelligence(--intelligence);
    } else if (comp == "Wisdom") {
      setWisdom(--wisdom);
    } else if (comp == "Charisma") {
      setCharisma(--charisma);
    }
  };

  //checking the limit and change the color to red
  const checking = () => {
    if (
      strength >= 14 &&
      dexterity >= 9 &&
      constitution >= 9 &&
      intelligence >= 9 &&
      wisdom >= 9 &&
      charisma >= 9
    ) {
      document.getElementById("Barbarian").style.color = "red";
    }
    if (
      strength >= 9 &&
      dexterity >= 9 &&
      constitution >= 9 &&
      intelligence >= 14 &&
      wisdom >= 9 &&
      charisma >= 9
    ) {
      document.getElementById("Wizard").style.color = "red";
    }
    if (
      strength >= 9 &&
      dexterity >= 9 &&
      constitution >= 9 &&
      intelligence >= 9 &&
      wisdom >= 9 &&
      charisma >= 14
    ) {
      document.getElementById("Bard").style.color = "red";
    }
  };

  //calling the checking function on the change of attribute's value
  useEffect(() => {
    checking();
  }, [
    strength,
    wisdom,
    constitution,
    charisma,
    dexterity,
    intelligence,
    ATTRIBUTE_LIST,
  ]);

  function handleClassHover(className) {
    setSelectedClass(className);
    setShowClassDetails(true);
  }

  function handleClassLeave() {
    setSelectedClass(null);
    setShowClassDetails(false);
  }

  return (
    <>
      <div className="header">React Coding Exercise</div>
      <center>
        {Object.entries(CLASS_LIST).map(([className, classAttributes]) => (
          <span
            key={className}
            onMouseOver={() => handleClassHover(className)}
            onMouseLeave={() => handleClassLeave()}
          >
            <h2
              id={`${className}`}
              style={{ display: "inline-block", margin: "0" }}
            >
              {className}
            </h2>
          </span>
        ))}

        {Object.entries(CLASS_LIST).map(([className, classAttributes]) => (
          <>
            {showClassDetails && selectedClass === className && (
              <ul>
                {Object.entries(classAttributes).map(
                  ([attributeName, attributeValue]) => (
                    <li key={attributeName}>
                      <span>{attributeName}: </span>
                      <span>{attributeValue}</span>
                    </li>
                  )
                )}
              </ul>
            )}
          </>
        ))}

        <br />
        {ATTRIBUTE_LIST.map((i, j) => {
          return (
            <>
              <p>
                {i.name}: {i.value}
              </p>
              <button
                onClick={() => {
                  increment(`${i.name}`);
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  decrement(`${i.name}`);
                }}
              >
                -
              </button>
            </>
          );
        })}
      </center>
    </>
  );
}

export default App;
