// type assertion
// we can define type better than typescript

let anything: any;

anything = "Rahul";

anything as string;

const kgToGmConcerter = (
  input: number | string,
): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Output is : ${Number(value) * 1000}`;
  }
};

const result1 = kgToGmConcerter(3) as number;
console.log({ result1 });

const result2 = kgToGmConcerter("4") as string;
console.log({ result2 });

type CustomError = {
  meesage: string;
};

try {
} catch (err) {
  console.log((err as CustomError).meesage);
}
