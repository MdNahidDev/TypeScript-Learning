// type interface
// Interface can be used on only on object type => object, array, function

// recommend: use interface on object rather than array, function

// object
interface User {
  id: number;
  name: string;
}

interface UserWithRole extends User {
  role: "admin" | "guest";
}

const user1: UserWithRole = {
  id: 1,
  name: "Mehzabin",
  role: "admin",
};

const user2: UserWithRole = {
  id: 2,
  name: "Rahat",
  role: "guest",
};

// array

interface Friends {
  [index: number]: string;
}

const frinds: Friends = ["Hello", "World"];

// function

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => {
  return num1 + num2;
};

// type..s
type Friends2 = string[];
type Add2 = (num1: number, num2: number) => number;
