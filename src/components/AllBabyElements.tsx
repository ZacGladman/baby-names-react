import { babyNames } from "../baby-names";
import { sortAlphabetically } from "../utils/sortAlphabetically";
import { OneBabyElement } from "./OneBabyElement";
import { useState } from "react";
import { nameFilter } from "../utils/name-matcher";
import { GenderButton } from "./GenderButton";
import { genderFilter } from "../utils/genderFilter";

export function AllBabyEntries(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState<string>("");

  const [genderSelection, setGenderSelection] = useState("");

  const sortedNames = sortAlphabetically(babyNames);

  const filteredNames = nameFilter(sortedNames, typedMessage);

  const genderFilteredNames = genderFilter(filteredNames, genderSelection);

  return (
    <>
      <input
        className="center"
        placeholder="search"
        value={typedMessage}
        onChange={(event) => {
          setTypedMessage(event.target.value);
        }}
      />
      <div>
        <button className="maleButton" onClick={() => setGenderSelection("m")}>
          ♂️
        </button>
        <button
          className="femaleButton"
          onClick={() => setGenderSelection("f")}
        >
          ♀️
        </button>
      </div>
      <button className="resetButton" onClick={() => setGenderSelection("")}>
        reset
      </button>
      <hr />
      <ul className="babyNamesList">
        {genderFilteredNames.map((oneName) => {
          return <OneBabyElement key={oneName.id} name={oneName} />;
        })}
      </ul>
    </>
  );
}
