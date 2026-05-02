// object destructuring
// array destructuring

const user = {
  id: 1,
  name: {
    firstName: "Ruhan",
    middleName: "Mahtasin",
    lastName: "Rahat",
  },
  gender: "Male",
  hobby: "Gaming",
  favouriteColor: "Red",
};

const { hobby } = user;
console.log(hobby);

const { gender: sexuality } = user; // Name Alias. Can change name
console.log(sexuality);

// const { gender: string } = user; ❌cant define type in destructuring

const {
  favouriteColor,
  name: { middleName: myMiddleName },
} = user;

console.log(myMiddleName);

const friends = ["Karim", "Rahim", "Mahim"];

const [, , bestFriend] = friends; // we can skip like this if we doesn't need

console.log(bestFriend);
