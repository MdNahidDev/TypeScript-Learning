// constraint means rules

type Student = {
  id: number;
  name: string;
  hasPen: boolean;
};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
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

const student3 = {
  car: true,
};

const result = addStudentToCourse(student2);
console.log(result);
