import * as fakeData from "./variables.js"
import * as locators from "./locators.js"
import { inputUserData, verifyDataAreCorrect } from "./functions.js"

describe("Testing text box", () => {
    before(() => {
        cy.visit("/text-box")
    })

    it("Check that user can enter a full name", () => {
        inputUserData(locators.USER_NAME, fakeData.NAME_TEST_DATA)
    })

    it("Check if user can enter an email", () => {
        inputUserData(locators.USER_EMAIL, fakeData.EMAIL_TEST_DATA)
    })

    it("Check if user can enter current address", () => {
        inputUserData(locators.USER_CURRENT_ADDRESS, fakeData.CURRENT_ADDRESS_DATA)
    })

    it("Check if user can enter permanent address", () => {
        inputUserData(locators.USER_PERMANENT_ADDRESS, fakeData.PERMANENT_ADDRESS_DATA)
    })

    it("Verify that 'Submit' button works correctly", () => {
        cy.get(locators.SUBMIT_BUTTON).click()
        verifyDataAreCorrect(locators.SUBMIT_NAME, fakeData.NAME_TEST_DATA);
        verifyDataAreCorrect(locators.SUBMIT_EMAIL, fakeData.EMAIL_TEST_DATA);
        verifyDataAreCorrect(locators.SUBMIT_CURRENT_ADDRESS, fakeData.CURRENT_ADDRESS_DATA);
        verifyDataAreCorrect(locators.SUBMIT_PERMANENT_ADDRESS, fakeData.PERMANENT_ADDRESS_DATA);
    })
})
