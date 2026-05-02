// Function
// arrow function, normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

// if we don't define type explicitly TypeScript implicitly use any type⬆️
// Can also define it's return value type⬆️

// add(2, "2");
add(5, 6);
console.log(add);

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(10, 5);
console.log(addArrow);

// object => function => method

const poorUser = {
  name: "Nahid",
  balance: 0,
  addBalance(value: number): number {
    return this.balance + value;
  },
};

poorUser.addBalance(6500);

const arr: number[] = [2, 4, 6];

const sqrArr = arr.map((element: number): number => element ** 2);

// can also define type in array and function⬆️
