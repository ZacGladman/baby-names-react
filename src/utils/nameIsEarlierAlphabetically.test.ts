import { name1IsEarlierInAlphabet } from "./nameIsEarlierInAlphabet";

test("names earlier in the akphabet return true", () => {
  expect(name1IsEarlierInAlphabet("Ben", "Zac")).toBe(true);
  expect(name1IsEarlierInAlphabet("Alex", "Ben")).toBe(true);
});

test("names later in alphabet return false", () => {
  expect(name1IsEarlierInAlphabet("Lebron", "King")).toBe(false);
});

test("names with the same letters but shorter return true", () => {
  expect(name1IsEarlierInAlphabet("Zac", "Zachary")).toBe(true);
  expect(name1IsEarlierInAlphabet("Zachary", "Zac")).toBe(false);
});
