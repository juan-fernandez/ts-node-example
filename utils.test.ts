const deck = require("./utils");

describe("utils", () => {
  it("can pick a card", () => {
    const cardPicker = deck.createCardPicker();
    const pickedCard = cardPicker();
    expect(pickedCard).not.toEqual(null);
  });
  it("can pick another card", () => {
    const cardPicker = deck.createAnotherPicker();
    const pickedCard = cardPicker();
    expect(pickedCard).not.toEqual(null);
  });
});
