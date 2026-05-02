// spread operator

const friensds = ["Omi", "Hanjala"];

const schoolFriends = ["Aurgyo", "Nabil", "Noyon"];

const collegeFriends = ["Nayem", "Showyeb"];

friensds.push(...schoolFriends);
friensds.push(...collegeFriends);

console.log(friensds);

// Using spread operator in array⬆️

const user = { name: "Rohan", phoneNo: "0123456789" };

const otherInfo = { hobby: "Travel", favouritecolor: "Blue" };

const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

// Merge object using spread operator⬆️

// rest operator

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Sent Invitation to ${friend}`),
  );
};

sendInvite("Akil", "Shakil", "Bakil", "Takil");
