import { SUBMITED_FORM } from "./locators.js";
export function inputUserData(locator, userData) {
    cy.get(locator).click()
    .type(userData)
    .should("have.value", userData)
}

export function inputUserSubjects(locator) {
    cy.get(locator).click()
    .type("maths{enter}")
    .should("contain", "Maths")
    .type("bio{enter}")
    .should("contain", "Biology")
}

export function chooseGender(locator, locatorChecked) {
    cy.get(locator).click({force: true})
    cy.get(locatorChecked)
    .should("have.css", "background-image")
}

export function chooseHobby(locator1, locator2, locator3, locatorChecked) {
    cy.get(locator1).check({force: true})
    cy.get(locator2).check({force: true})
    cy.get(locator3).check({force: true})
    cy.get(locatorChecked)
    .should("have.css", "background-image")
}

export function verifyValidInputData(locator) {
    cy.get(locator).should("have.css", "border-color", "rgb(40, 167, 69)")
}

export function verifySubmitCorrectData(childIndex, userSubmitData) {
    let locator = `${SUBMITED_FORM}:nth-child(${childIndex})`
    cy.get(locator)
    .should("contain", userSubmitData)
}