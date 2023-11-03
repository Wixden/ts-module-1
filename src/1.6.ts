// Learning Functions:

// Normal/Regular Function
function add(x: number, y: number = 10): number {
  //Assigning Default Value
  return x + y;
}
add(2, 4);

// Arrow Function
const addNumber = (x: number, y: number): number => x + y;
addNumber(2, 4);

// object --> function --> method
const firstUser = {
  name: "Akhtar",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 4];
const newNumber: number[] = arr.map(
  (element: number): number => element * element
);
