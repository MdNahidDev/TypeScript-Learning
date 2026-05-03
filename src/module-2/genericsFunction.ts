const createArrrayWithGeneric = <T>(value: T) => {
  return [value];
};
const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(222);
const arrobj = createArrrayWithGeneric({
  id: 123,
  name: "Next Level",
});

// tuple

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];
const res1 = createArrayTupleWithGeneric("Mezba", false);

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};
const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar",
  hasPen: true,
};

const result = addStudentToCourse(student1);
console.log(result);
