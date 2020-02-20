var deck = require("./utils");
describe("utils", function () {
    it("can pick a card", function () {
        var cardPicker = deck.createCardPicker();
        var pickedCard = cardPicker();
        expect(pickedCard).not.toEqual(null);
    });
    it("can pick another card", function () {
        var cardPicker = deck.createAnotherPicker();
        var pickedCard = cardPicker();
        expect(pickedCard).not.toEqual(null);
    });
});
