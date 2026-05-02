// ? : ternary operator : decision making
// ?? : nullish coalescing operator
// ?. optional chaining

const age = 21;

const biyerJoggo = (age: number) => {
  const result = age >= 21 ? "Your'e eligible" : "Your'e not eligible";
  return result;
};

const biye = biyerJoggo(age);
console.log(biye);

const userTheme = null;

const setTheme = userTheme ?? "Dark";
// Only work's with undefined or null⬆️
console.log(setTheme);

const user: {
  id: number;
  name: {
    firstName: string;
    lastName?: string;
  };
} = {
  id: 1,
  name: {
    firstName: "Jhankar",
  },
};

const lastName = user?.name?.lastName; // optional chaining so application don't change
console.log(lastName);
