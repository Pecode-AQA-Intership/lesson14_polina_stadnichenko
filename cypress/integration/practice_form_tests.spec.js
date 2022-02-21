import * as locator from "../PageObjects/PracticeForm/locators.js";
import * as data from "../PageObjects/PracticeForm/fakeUserData.js";
import PracticeForm from "../PageObjects/PracticeForm/PracticeFormPage.js";

let practiceForm = new PracticeForm();

describe("Testing the Practice Form", () => {
    before(() => {
        practiceForm.visitPage();
    });

    it("Check if user can enter a valid first name", () => {
        practiceForm.inputUserData(locator.FIRST_NAME, data.USER_FIRST_NAME);
    });

    it("Check if user can enter a valid last name", () => {
        practiceForm.inputUserData(locator.LAST_NAME, data.USER_LAST_NAME);
    });

    it("Check if user can enter a valid email", () => {
        practiceForm.inputUserData(locator.EMAIL, data.USER_EMAIL);
    });

    it("Check if user can choose a male gender", () => {
        practiceForm.chooseGender(locator.GENDER_MALE);
    });

    it("Check if user can choose a female gender", () => {
        practiceForm.chooseGender(locator.GENDER_FEMALE);
    });

    it("Check if user can choose another gender", () => {
        practiceForm.chooseGender(locator.GENDER_OTHER);
    });

    it("Check if user can enter a valid phone number", () => {
        practiceForm.inputUserData(locator.MOBILE_NUMBER, data.USER_MOBILE_NUMBER);
    });

    it("Check if user can choose a birth date", () => {
        practiceForm.chooseBirthDate();
    });

    it("Check if user can select subjects", () => {
        practiceForm.inputUserSubjects();
    });

    it("Check if user can select hobbies", () => {
        practiceForm.chooseHobby();
    });

    it("Check if user can upload a picture", () => {
        practiceForm.uploadPicture("cypress/fixtures/7OVUSJo.png");
    });

    it("Check if user can enter current address", () => {
        practiceForm.inputUserData(locator.CURRENT_ADDRESS, data.USER_CURRENT_ADDRESS);
    });

    it("Check if user can select a state", () => {
        practiceForm.selectStateAndCity(locator.SELECT_STATE, "Har{enter}", "Haryana");
    });

    it("Check if user can select a city", () => {
        practiceForm.selectStateAndCity(locator.SELECT_CITY, "kar{enter}", "Karnal");
    });

    it("Verify the functionality of Submit button", () => {
        cy.get(locator.SUBMIT_BUTTON).click();

        practiceForm.verifySubmitCorrectData(1, `${data.USER_FIRST_NAME} ${data.USER_LAST_NAME}`);
        practiceForm.verifySubmitCorrectData(2, data.USER_EMAIL);
        practiceForm.verifySubmitCorrectData(3, "Other");
        practiceForm.verifySubmitCorrectData(4, data.USER_MOBILE_NUMBER);
        practiceForm.verifySubmitCorrectData(5, "13 January,1999");
        practiceForm.verifySubmitCorrectData(6, "Maths, Biology");
        practiceForm.verifySubmitCorrectData(7, "Sports, Reading, Music");
        practiceForm.verifySubmitCorrectData(8, "7OVUSJo.png");
        practiceForm.verifySubmitCorrectData(9, data.USER_CURRENT_ADDRESS);
        practiceForm.verifySubmitCorrectData(10, "Haryana Karnal");
    });

    it("Verify that all data are valid", () => {
        practiceForm.verifyValidInputData(locator.FIRST_NAME);
        practiceForm.verifyValidInputData(locator.LAST_NAME);
        practiceForm.verifyValidInputData(locator.EMAIL);
        practiceForm.verifyValidInputData(locator.MOBILE_NUMBER);
        practiceForm.verifyValidInputData(locator.DATE_OF_BIRTH);
        practiceForm.verifyValidInputData(locator.CURRENT_ADDRESS);
    });

})