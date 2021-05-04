const functions = {
  add: (firstNum, secondNum) => firstNum + secondNum,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Adarsh" };
    user["lastName"] = "Salecha";
    return user;
  },
  fetchShoppingList: () => {
    const shoppingList = [
      "diapers",
      "kleenex",
      "trash bags",
      "paper towels",
      "beer",
    ];
    return shoppingList;
  },
};

module.exports = functions;
