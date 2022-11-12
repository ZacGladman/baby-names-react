import { letterIsEarlierInAlphabet } from "./letterIsEarlierInAlphabet";

export function name1IsEarlierInAlphabet(
  name1: string,
  name2: string
): boolean {
  const shortestName = name1.length < name2.length ? name1 : name2;
  for (let i = 0; i < shortestName.length; i++) {
    const letterIsEarlier = letterIsEarlierInAlphabet(name1[i], name2[i]);
    if (letterIsEarlier === true) {
      return true;
    } else if (letterIsEarlier === false) {
      return false;
    }
  }
  return shortestName === name1 ? true : false;
}
