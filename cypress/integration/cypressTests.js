import * as fakeData from "./variables.js"

describe("Testing text box", () => {
    before(() => {
        cy.visit("https://demoqa.com/text-box")
    })
    it("Check that user can enter a full name", () => {
        cy.get("#userName").click()
        .type(fakeData.NAME_TEST_DATA)
        .should("have.value", fakeData.NAME_TEST_DATA)
    })
    it("Check if user can enter an email", () => {
        cy.get("#userEmail").click()
        .type(fakeData.EMAIL_TEST_DATA)
        .should("have.value", fakeData.EMAIL_TEST_DATA)
    })
    it("Check if user can enter current address", () => {
        cy.get("#currentAddress").click()
        .type(fakeData.CURRENT_ADDRESS_DATA)
        .should("have.value", fakeData.CURRENT_ADDRESS_DATA)
    })
    it("Check if user can enter permanent address", () => {
        cy.get("#permanentAddress").click()
        .type(fakeData.PERMANENT_ADDRESS_DATA)
        .should("have.value", fakeData.PERMANENT_ADDRESS_DATA)
    })
    it("Verify that 'Submit' button works correctly", () => {
        cy.get("#submit").click()
        cy.get("p#name").should("include.text", fakeData.NAME_TEST_DATA)
        cy.get("p#email").should("include.text", fakeData.EMAIL_TEST_DATA)
        cy.get("p#currentAddress").should("include.text", fakeData.CURRENT_ADDRESS_DATA)
        cy.get("p#permanentAddress").should("include.text", fakeData.PERMANENT_ADDRESS_DATA)
    })
})
