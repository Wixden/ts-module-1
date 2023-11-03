"use strict";
// Learning Functions:
// Normal/Regular Function
function add(x, y = 10) {
    //Assigning Default Value
    return x + y;
}
add(2, 4);
// Arrow Function
const addNumber = (x, y) => x + y;
addNumber(2, 4);
// object --> function --> method
const firstUser = {
    name: "Akhtar",
    balance: 0,
    addBalance(balance) {
        return `My new balance is ${this.balance + balance}`;
    },
};
const arr = [1, 2, 3, 4];
const newNumber = arr.map((element) => element * element);
