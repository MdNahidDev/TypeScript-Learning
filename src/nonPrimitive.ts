// array, objects

let bazarList = ["potato", "onion", "oil"];

bazarList.push();

let mixedArray: (string | number)[] = ["eggs", 12, "milk", 35];

// We can define multiple type Explicitly in an array like this⬆️

mixedArray.push(23);

let couple: [string, string] = ["Husband", "Wife"];

// We can define fixed length with fixed types in an array using tuple⬆️

// example:

let destination: [string, string, number, boolean] = [
  "Dhaka",
  "Chattogram",
  2,
  true,
];

// reference type: object

const user: {
  organization: string;
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  home: "Dhaka"; // Can define a value to a type: Literal type=> can't change the value
  readonly subject: string; // access modifier
} = {
  organization: "Programming Hero",
  firstName: "Nahid",
  lastName: "Hasan",
  home: "Dhaka",
  subject: "Computer Science",
};

// Can also define type and fixed length

user.organization = "PH Next Level";
// can also change⬆️

// user.home = "America"; // can't change it cause the value is used by type
// user.subject="CSt" // can't change cause read-only property

// typescript can guess what method you can use.

console.log(user);

//
