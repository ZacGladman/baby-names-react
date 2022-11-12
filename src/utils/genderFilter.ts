import { babyNamesProps } from "../baby-names";

export function genderFilter(
  array: babyNamesProps[],
  genderFilter: string
): babyNamesProps[] {
  const filteredArray = [];
  for (const element of array) {
    if (element.sex.includes(genderFilter)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}
