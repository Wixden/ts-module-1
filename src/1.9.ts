{
  // Type Alias

  const student1: {
    name: string;
    age: number;
    gender: string;
    contactNumber?: string;
    address: string;
  } = {
    name: "Akhtar",
    age: 25,
    gender: "Male",
    contactNumber: "0123456789",
    address: "123 Main St, New York, NY 10011",
  };

  const student2: {
    name: string;
    age: number;
    gender: string;
    contactNumber?: string;
    address: string;
  } = {
    name: "Chandler",
    age: 52,
    gender: "Male",
    contactNumber: "1425369870",
    address: "456 Side St, Old York, OY 10011",
  };

  const student3: {
    name: string;
    age: number;
    gender: string;
    contactNumber?: string;
    address: string;
  } = {
    name: "Rachel",
    age: 25,
    gender: "Male",
    contactNumber: "0123456789",
    address: "123 Main St, New York, NY 10011",
  };

  // Above objects all has same type. And without using type alias.

  // Alias name should start with capital letter

  // Below objects all has same type with type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNumber?: string;
    address: string;
  };

  const student4: Student = {
    name: "Chandler",
    age: 52,
    gender: "Male",
    contactNumber: "1425369870",
    address: "456 Side St, Old York, OY 10011",
  };

  const student5: Student = {
    name: "Phoebe",
    age: 25,
    gender: "Female",
    contactNumber: "0123456789",
    address: "123 Main St, New York, NY 10011",
  };

  // boolean alias
  type IsAdmin = boolean;
  const userRole: IsAdmin = false;

  // function type alias
  type NumAddition = (num1: number, num2: number) => number;
  const addNum: NumAddition = (num1, num2) => num1 + num2;

  //
}
