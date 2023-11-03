"use strict";
{
    // Nullable types + Unknown types
    // Nullable types
    const searchName = (value) => {
        if (value) {
            console.log("Searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    searchName(null);
    // Unknown types
    const getSpeedInMPS = (value) => {
        if (typeof value === "number") {
            const convertSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertSpeed}`);
        }
        else if (typeof value === "string") {
            const [valueNumber, text] = value.split(" ");
            const convertSpeed = (parseFloat(valueNumber) * 1000) / 3600;
            console.log(`The speed is ${convertSpeed}`);
        }
        else {
            console.log("Wrong value");
        }
    };
    // getSpeedInMPS(100);
    getSpeedInMPS(null);
    // Never
    // When something will never return anything is called never types
    const throwError = (msg) => {
        throw new Error(msg);
    };
    throwError("Something went wrong");
    //
}
