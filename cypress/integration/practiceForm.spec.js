import * as locators from "../functions_and_data/locators.js";
import * as fakeData from "../functions_and_data/userData.js";
import { 
    inputUserData, 
    chooseGender, 
    chooseHobby, 
    inputUserSubjects, 
    verifyValidInputData,
    verifySubmitCorrectData 
} from "../functions_and_data/functions.js";

describe("Testing the Practice Form", () => {
    before(() => {
        cy.visit("/automation-practice-form");
    });

    it("Check if user can enter a valid first name", () => {
        inputUserData(locators.FIRST_NAME, fakeData.USER_FIRST_NAME);
    });

    it("Check if user can enter a valid last name", () => {
        inputUserData(locators.LAST_NAME, fakeData.USER_LAST_NAME);
    });

    it("Check if user can enter a valid email", () => {
        inputUserData(locators.EMAIL, fakeData.USER_EMAIL);
    });

    it("Check if user can choose a male gender", () => {
        chooseGender(locators.GENDER_MALE, locators.GENDER_CHECKED);
    });

    it("Check if user can choose a female gender", () => {
        chooseGender(locators.GENDER_FEMALE, locators.GENDER_CHECKED);
    });

    it("Check if user can choose another gender", () => {
        chooseGender(locators.GENDER_OTHER, locators.GENDER_CHECKED);
    });

    it("Check if user can enter a valid phone number", () => {
        inputUserData(locators.MOBILE_NUMBER, fakeData.USER_MOBILE_NUMBER);
    });

    it("Check if user can choose a birth date", () => {
        cy.get(locators.DATE_OF_BIRTH).click();
        cy.get(locators.CHOOSE_DATE_CONTAINER).should("be.visible");
        cy.get(locators.SELECT_MONTH).select("January");
        cy.get(locators.SELECT_YEAR).select("1999");
        cy.get(locators.CURRENT_MONTH_YEAR).should("have.text", "January 1999");
        cy.get(locators.SELECT_DAY).first().click();
        cy.get(locators.DATE_OF_BIRTH).should("have.value", "13 Jan 1999");
    });

    it("Check if user can select subjects", () => {
        inputUserSubjects(locators.SUBJECTS);
    });

    it("Check if user can select hobbies", () => {
        chooseHobby(locators.HOBBIES_SPORTS, locators.HOBBIES_READING, locators.HOBBIES_MUSIC, locators.HOBBIES_CHECKED);
    });

    it("Check if user can upload a picture", () => {
        cy.get(locators.UPLOAD_PICTURE).click().selectFile("cypress/fixtures/7OVUSJo.png");
    });

    it("Check if user can enter current address", () => {
        inputUserData(locators.CURRENT_ADDRESS, fakeData.USER_CURRENT_ADDRESS);
    });

    it("Check if user can select a state", () => {
        cy.get(locators.SELECT_STATE).click()
        .type("Har{enter}")
        .should("contain", "Haryana");
    });

    it("Check if user can select a city", () => {
        cy.get(locators.SELECT_CITY).click()
        .type("kar{enter}")
        .should("contain", "Karnal");
    });

    it("Verify the functionality of Submit button", () => {
        cy.get(locators.SUBMIT_BUTTON).click();

        verifySubmitCorrectData(1, `${fakeData.USER_FIRST_NAME} ${fakeData.USER_LAST_NAME}`);
        verifySubmitCorrectData(2, fakeData.USER_EMAIL);
        verifySubmitCorrectData(3, "Other");
        verifySubmitCorrectData(4, fakeData.USER_MOBILE_NUMBER);
        verifySubmitCorrectData(5, "13 January,1999");
        verifySubmitCorrectData(6, "Maths, Biology");
        verifySubmitCorrectData(7, "Sports, Reading, Music");
        verifySubmitCorrectData(8, "7OVUSJo.png");
        verifySubmitCorrectData(9, fakeData.USER_CURRENT_ADDRESS);
        verifySubmitCorrectData(10, "Haryana Karnal");
    });

    it("Verify that all data are valid", () => {
        verifyValidInputData(locators.FIRST_NAME);
        verifyValidInputData(locators.LAST_NAME);
        verifyValidInputData(locators.EMAIL);
        verifyValidInputData(locators.MOBILE_NUMBER);
        verifyValidInputData(locators.DATE_OF_BIRTH);
        verifyValidInputData(locators.CURRENT_ADDRESS);
    });

})