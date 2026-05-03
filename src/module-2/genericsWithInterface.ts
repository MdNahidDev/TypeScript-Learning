interface Developer<A, B = null> {
  // B default value null
  name: string;
  company: string;
  smartWatch: A;
  bike?: B;
}

interface Watch {
  heartRate: string;
  price: number;
}

const richDeveloper: Developer<Watch> = {
  name: "Nahid",
  company: "Programming Hero",
  smartWatch: {
    heartRate: "200",
    price: 2500,
  },
};
