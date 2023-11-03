"use strict";
// Spread Operator
// Destructuring
// Spread Operator
const num1 = [1, 2, 3, 4];
const num2 = [5, 6, 7, 8];
// num1.push(num2); // wrong way to push class
num1.push(...num2);
const class1 = {
    book1: "English",
    book2: "Maths",
    book3: "Science",
};
const class2 = {
    book4: "Biology",
    book5: "Physics",
    book6: "Chemistry",
};
const classList = Object.assign(Object.assign({}, class1), class2);
// rest operator
const friends = ["Abul", "Kabul", "Kashmali", "Kash"];
const greetFriends = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
// Destructuring
