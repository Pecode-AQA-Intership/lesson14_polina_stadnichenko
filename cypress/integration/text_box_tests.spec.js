import * as data from "../PageObjects/TextBox/fakeUserData";
import * as locator from "../PageObjects/TextBox/locators.js";
import TextBox from "../PageObjects/TextBox/TextBoxPage.js";
let textBox = new TextBox();

describe("Testing text box", () => {
    before( () => {
        textBox.visitPage();
    });

    it("Check that user can enter a full name", () => {
        textBox.inputUserData(locator.USER_NAME, data.NAME_DATA)
    });

    it("Check if user can enter an email", () => {
        textBox.inputUserData(locator.USER_EMAIL, data.EMAIL_DATA)
    });

    it("Check if user can enter current address", () => {
        textBox.inputUserData(locator.USER_CURRENT_ADDRESS, data.CURRENT_ADDRESS_DATA)
    });

    it("Check if user can enter permanent address", () => {
        textBox.inputUserData(locator.USER_PERMANENT_ADDRESS, data.PERMANENT_ADDRESS_DATA)
    });

    it("Verify that 'Submit' button works correctly", () => {
        textBox.getSubmitButton(locator.SUBMIT_BUTTON);
        textBox.verifyDataAreCorrect(locator.SUBMIT_NAME, data.NAME_DATA);
        textBox.verifyDataAreCorrect(locator.SUBMIT_EMAIL, data.EMAIL_DATA);
        textBox.verifyDataAreCorrect(locator.SUBMIT_CURRENT_ADDRESS, data.CURRENT_ADDRESS_DATA);
        textBox.verifyDataAreCorrect(locator.SUBMIT_PERMANENT_ADDRESS, data.PERMANENT_ADDRESS_DATA);
    });
})