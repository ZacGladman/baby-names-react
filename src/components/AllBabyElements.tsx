import { babyNames } from "../baby-names";
import { sortAlphabetically } from "../utils/sortAlphabetically";
import { OneBabyElement } from "./OneBabyElement";

export function AllBabyEntries(): JSX.Element {
  const sortedNames = sortAlphabetically(babyNames);
  return (
    <ul className="babyNamesList">
      {sortedNames.map((oneName) => {
        return <OneBabyElement key={oneName.id} name={oneName} />;
      })}
    </ul>
  );
}
