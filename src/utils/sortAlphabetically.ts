import { babyNamesProps } from "../baby-names";

export function sortAlphabetically(array: babyNamesProps[]): babyNamesProps[] {
  return array.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameB < nameA) {
      return 1;
    }
    return 0;
  });
}
