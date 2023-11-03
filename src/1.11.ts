{
  // Ternary Operator || Optional Chaining || Nullish Coalescing Operator

  const age: number = 17;

  const checkAdult = () => {
    if (age >= 18) {
      return console.log("Adult");
    } else {
      return console.log("Underage");
    }
  };

  // Ternary Operator
  const isAdult = age >= 18 ? "Adult" : "Underage";
  // console.log({ isAdult });

  // Nullish Coalescing Operator
  // null / undefined ---> decision making

  const isAuthenticated = null;

  const result = isAuthenticated ?? "Guest";

  // ternary operator
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      state: string;
      country: string;
      zipCode: string;
      street?: string;
    };
  };

  const user: User = {
    name: "Akhtar",
    address: {
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10011",
    },
  };

  // Return a default value if the street is not undefined/null
  const streetDetails = user?.address?.street ?? "No Street Details";
  console.log({ streetDetails });
}
