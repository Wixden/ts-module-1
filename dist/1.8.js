"use strict";
{
    // destructuring
    const user = {
        id: 3,
        name: {
            firstName: "John",
            middleName: "Persian",
            lastName: "Doe",
        },
        address: {
            city: "New York",
            state: "NY",
            country: "USA",
        },
    };
    const { id, name: { firstName, middleName, lastName }, } = user;
    const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
    const [, , bestFriend, ...rest] = myFriends;
}
