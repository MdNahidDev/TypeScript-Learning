// JS - TS
// string, number, boolean, undefined, null

// TS: never, unknown, void

let userName: string = "nahid123";

//Explicit: When user define its type using a colon :  ⬆️

let userId = 123;

let isAdmin = false;
isAdmin = true;

// Implicit (Inferred): TypeScript "guesses" the type from the value ⬆️

let x = undefined;

// If we don't define it automatically becomes any. For that we can assign it any value. ⬆️

// example:
x = 55;
x = "nahid";
