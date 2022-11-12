import { nameMatchesInput } from "./name-matcher";

test("names that start with the search input return true", () => {
    expect(nameMatchesInput('Zachary', 'Za')).toBe(true);
    expect(nameMatchesInput('Amon-Ra', 'AMON')).toBe(true)
});

test("names that contain the search input but do not start with it return true", () => {
    expect(nameMatchesInput('Zachary', 'har')).toBe(true)
});

test("names that neither start with nor contain the search input return false", () => {
    expect(nameMatchesInput('Jesus', 'Za')).toBe(false);
    expect(nameMatchesInput('Vlodomir', 'AMON')).toBe(false)
})

