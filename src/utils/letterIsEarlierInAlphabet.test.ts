import { letterIsEarlierInAlphabet } from "./letterIsEarlierInAlphabet";

test("letters earlier in alphabet return true", () => {
  expect(letterIsEarlierInAlphabet("a", "b")).toBe(true);
  expect(letterIsEarlierInAlphabet("S", "v")).toBe(true);
  expect(letterIsEarlierInAlphabet("x", "Z")).toBe(true);
});

test("letters later in alphabet return false", () => {
  expect(letterIsEarlierInAlphabet("t", "m")).toBe(false);
  expect(letterIsEarlierInAlphabet("L", "f")).toBe(false);
  expect(letterIsEarlierInAlphabet("z", "G")).toBe(false);
});

test("if the same letter, return undefined", () => {
  expect(letterIsEarlierInAlphabet("z", "z")).toBe(undefined);
  expect(letterIsEarlierInAlphabet("g", "G")).toBe(undefined);
});
