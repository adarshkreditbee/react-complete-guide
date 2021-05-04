const functions = require("./functions");

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Validate null value", () => {
  expect(functions.isNull()).toBeNull();
});

test("Check the value to be falsey", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

test("Check for the User object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Adarsh",
    lastName: "Salecha",
  });
});

test("the shopping list has beer on it", () => {
  expect(functions.fetchShoppingList()).toContain("beer");
  expect(new Set(functions.fetchShoppingList())).toContain("beer");
});
