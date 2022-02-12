import * as locators from "./locators.js";
import * as fakeData from "./userData.js";
import { inputUserData, chooseGender, chooseHobby, inputUserSubjects } from "./functions.js";

describe("Testing the Practice Form", () => {
    before(() => {
        cy.visit("/automation-practice-form")
    })

    it("Check if user can enter a valid first name", () => {
        inputUserData(locators.FIRST_NAME, fakeData.USER_FIRST_NAME)
    })

    it("Check if user can enter a valid last name", () => {
        inputUserData(locators.LAST_NAME, fakeData.USER_LAST_NAME)
    })

    it("Check if user can enter a valid email", () => {
        inputUserData(locators.EMAIL, fakeData.USER_EMAIL)
    })

    it("Check if user can choose a male gender", () => {
        chooseGender(locators.GENDER_MALE, locators.GENDER_CHECKED)
    })

    it("Check if user can choose a female gender", () => {
        chooseGender(locators.GENDER_FEMALE, locators.GENDER_CHECKED)
    })

    it("Check if user can choose another gender", () => {
        chooseGender(locators.GENDER_OTHER, locators.GENDER_CHECKED)
    })

    it("Check if user can enter a valid phone number", () => {
        inputUserData(locators.MOBILE_NUMBER, fakeData.USER_MOBILE_NUMBER)
    })

    it("Check if user can choose a birth date", () => {
        cy.get(locators.DATE_OF_BIRTH).click()
        cy.get(locators.CHOOSE_DATE_CONTAINER).should("be.visible")
        cy.get(locators.SELECT_MONTH).select("January")
        cy.get(locators.SELECT_YEAR).select("1999")
        cy.get(locators.CURRENT_MONTH_YEAR).should("have.text", "January 1999")
        cy.get(locators.SELECT_DAY).first().click()
        cy.get(locators.DATE_OF_BIRTH).should("have.value", "13 Jan 1999")
    })

    // it("Check if user can enter subjects", () => {
    //     cy.get(locators.SUBJECTS).click()
    //     .type("math")
    //     cy.get(locators.SELECT_SUBJECT).first().click()
    // })

    it("Check if user can select hobbies", () => {
        chooseHobby(locators.HOBBIES_SPORTS, locators.HOBBIES_READING, locators.HOBBIES_MUSIC, locators.HOBBIES_CHECKED)
    })

    it("Check if user can upload a picture", () => {
        cy.get(locators.UPLOAD_PICTURE).click().selectFile("7OVUSJo.png")
    })

    it("Check if user can enter current address", () => {
        inputUserData(locators.CURRENT_ADDRESS, fakeData.USER_CURRENT_ADDRESS)
    })

    // it("Check if user can select a state", () => {
    //     cy.get(locators.SELECT_STATE).click()
    //     cy.get(locators.STATE_LIST)
    // })

})