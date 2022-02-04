import { faker } from '@faker-js/faker';

const NAME_TEST_DATA = faker.name.findName();
const EMAIL_TEST_DATA = faker.internet.email();
const CURRENT_ADDRESS_DATA = faker.address.city() + ", " + faker.address.streetName() + ", " + faker.address.secondaryAddress();
const PERMANENT_ADDRESS_DATA = faker.address.city() + ", " + faker.address.streetName() + ", " + faker.address.secondaryAddress();

describe("Testing text box", () => {
    before(() => {
        cy.visit("https://demoqa.com/text-box")
    })
    it("Check that user can enter a full name", () => {
        cy.get("#userName").click()
        .type(NAME_TEST_DATA)
        .should("have.value", NAME_TEST_DATA)
    })
    it("Check if user can enter an email", () => {
        cy.get("#userEmail").click()
        .type(EMAIL_TEST_DATA)
        .should("have.value", EMAIL_TEST_DATA)
    })
    it("Check if user can enter current address", () => {
        cy.get("#currentAddress").click()
        .type(CURRENT_ADDRESS_DATA)
        .should("have.value", CURRENT_ADDRESS_DATA)
    })
    it("Check if user can enter permanent address", () => {
        cy.get("#permanentAddress").click()
        .type(PERMANENT_ADDRESS_DATA)
        .should("have.value", PERMANENT_ADDRESS_DATA)
    })
    it("Verify that 'Submit' button works correctly", () => {
        cy.get("#submit").click()
        cy.get("p#name").should("include.text", NAME_TEST_DATA)
        cy.get("p#email").should("include.text", EMAIL_TEST_DATA)
        cy.get("p#currentAddress").should("include.text", CURRENT_ADDRESS_DATA)
        cy.get("p#permanentAddress").should("include.text", PERMANENT_ADDRESS_DATA)
    })
})
