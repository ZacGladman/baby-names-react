import { babyNamesProps } from "../baby-names";

interface babyNamesMAPprops {
  name: babyNamesProps;
}

export function OneBabyElement(props: babyNamesMAPprops): JSX.Element {
  const name = props.name;
  return (
    <>
      {name.sex === "m" ? (
        <button className="male"><b>{name.name}</b></button>
      ) : (
        <button className="female"><b>{name.name}</b></button>
      )}
    </>
  );
}
