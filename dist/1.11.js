"use strict";
var _a, _b;
{
    // Ternary Operator || Optional Chaining || Nullish Coalescing Operator
    const age = 17;
    const checkAdult = () => {
        if (age >= 18) {
            return console.log("Adult");
        }
        else {
            return console.log("Underage");
        }
    };
    // Ternary Operator
    const isAdult = age >= 18 ? "Adult" : "Underage";
    // console.log({ isAdult });
    // Nullish Coalescing Operator
    // null / undefined ---> decision making
    const isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    // ternary operator
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result }, { result2 });
    const user = {
        name: "Akhtar",
        address: {
            city: "New York",
            state: "NY",
            country: "USA",
            zipCode: "10011",
        },
    };
    // Return a default value if the street is not undefined/null
    const streetDetails = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.street) !== null && _b !== void 0 ? _b : "No Street Details";
    console.log({ streetDetails });
}
