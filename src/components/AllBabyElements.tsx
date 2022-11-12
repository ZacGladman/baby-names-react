import { babyNames } from "../baby-names";
import { sortAlphabetically } from "../utils/sortAlphabetically";
import { OneBabyElement } from "./OneBabyElement";
import { useState } from "react";
import { nameFilter } from "../utils/name-matcher"

export function AllBabyEntries(): JSX.Element {

  const sortedNames = sortAlphabetically(babyNames);

  const [typedMessage, setTypedMessage] = useState<string>('')

  const filteredNames = nameFilter(sortedNames, typedMessage)

  return (
    <>  
        <input className="center"
        placeholder="search" 
        value = {typedMessage}
        onChange={(event) => {
        setTypedMessage(event.target.value);
        }}
        />
        <hr />
        <ul className="babyNamesList">
        {filteredNames.map((oneName) => {
            return <OneBabyElement key={oneName.id} name={oneName} />;
        })}
        </ul>
    </>
  );
}
