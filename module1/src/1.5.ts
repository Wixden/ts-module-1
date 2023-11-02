// Reference Type --> Object
const user: {
  company: "Programming Hero"; //Type --> Literal Type
  readonly firstName: string;
  middleName?: string; //Type --> Optional Type
  lastName: string;
} = {
  company: "Programming Hero",
  firstName: "Akhtar",
  lastName: "Hussain",
};

console.log(user);
