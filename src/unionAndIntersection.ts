// union

type UserRole = "admin" | "user"; // Union type

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

// getDashboard("guest");

// Intersection &

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phoneNo: "018",
  designation: "Manager",
  teamSize: 20,
};
