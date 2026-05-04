// mapped types

// map

const arrayOfNum: number[] = [1, 2, 3];

const arrayOfString: string[] = ["1", "2", "3"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

type AreaOfBool = {
  [key in "height" | "width"]: boolean;
};

//

type AreaOfNumber = {
  height: number;
  width: number;
};

//

type AreaOfString = {
  [key in keyof AreaOfNumber]: string;
};

//

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: boolean }> = {
  height: 50,
  width: true,
};
