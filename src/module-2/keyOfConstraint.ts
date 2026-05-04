// keyOf: type operator

type richPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof richPeopleVehicle;

const myVehicle: myVehicle2 = "car";
