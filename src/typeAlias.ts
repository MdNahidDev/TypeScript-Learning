type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};
//
//
const user1: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
} = {
  id: 1,
  name: {
    firstName: "Mr.",
    lastName: "V",
  },
  gender: "male",
  contactNo: "017126",
  address: {
    division: "Dhaka",
    city: "Gulshan",
  },
};

//
//

const user2: User = {
  id: 1,
  name: {
    firstName: "Mrs.",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "012345",
  address: {
    division: "Pabna",
    city: "Ataikula",
  },
};

// Type Alias⬆️
type IsAdmin = true;
const isAdmin: IsAdmin = true;

// function
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;
