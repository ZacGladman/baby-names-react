import { genderFilter } from "./genderFilter";

test("gender filter works with m/f input", () => {
  expect(
    genderFilter(
      [
        { id: 0, name: "Zac", sex: "m" },
        { id: 1, name: "Birda", sex: "f" },
        { id: 2, name: "Will", sex: "m" },
      ],
      "m"
    )
  ).toStrictEqual([
    { id: 0, name: "Zac", sex: "m" },
    { id: 2, name: "Will", sex: "m" },
  ]);
});

test("gender filter works with empty input", () => {
  expect(
    genderFilter(
      [
        { id: 0, name: "Zac", sex: "m" },
        { id: 1, name: "Birda", sex: "f" },
        { id: 2, name: "Will", sex: "m" },
      ],
      ""
    )
  ).toStrictEqual([
    { id: 0, name: "Zac", sex: "m" },
    { id: 1, name: "Birda", sex: "f" },
    { id: 2, name: "Will", sex: "m" },
  ]);
});
