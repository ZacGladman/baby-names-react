import { sortAlphabetically } from "./sortAlphabetically";

test("sorts names alphabetically", () => {
  expect(
    sortAlphabetically([
      {
        id: 0,
        name: "Zahra",
        sex: "f",
      },
      {
        id: 1,
        name: "Parsa",
        sex: "m",
      },
      {
        id: 2,
        name: "Avah",
        sex: "f",
      },
      {
        id: 3,
        name: "Lala",
        sex: "f",
      },
      {
        id: 4,
        name: "Jamshed",
        sex: "m",
      },
    ])
  ).toStrictEqual([
    {
      id: 2,
      name: "Avah",
      sex: "f",
    },
    {
      id: 4,
      name: "Jamshed",
      sex: "m",
    },
    {
      id: 3,
      name: "Lala",
      sex: "f",
    },
    {
      id: 1,
      name: "Parsa",
      sex: "m",
    },
    {
      id: 0,
      name: "Zahra",
      sex: "f",
    },
  ]);
});
