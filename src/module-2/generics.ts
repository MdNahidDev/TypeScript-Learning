// dynamically generalize

const friends: Array<string> = ["Mr. x", "Mrs. y"];

type GenericArray = Array<boolean>;

const trueFalse: GenericArray = [true, false, true];

type Coordinates<A, B> = [A, B];

const coordinates: Coordinates<number, number> = [1, 2];

const coordinates2: Coordinates<string, string> = ["1", "2"];

// generalize⬇⬆️

type General<T> = Array<T>;

const user: General<Object> = [
  {
    id: 1,
    name: "Juyel",
  },
  {
    id: 2,
    name: "Payel",
  },
  {
    id: 3,
    name: "Doyel",
  },
];

const userList: General<{ id: number; name: string }> = [
  {
    id: 1,
    name: "Juyel",
  },
  {
    id: 2,
    name: "Payel",
  },
  {
    id: 3,
    name: "Doyel",
  },
];
