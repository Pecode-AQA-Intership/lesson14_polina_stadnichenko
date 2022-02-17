import { SUBMITED_FORM } from "../functions_and_data/locators.js";
export function inputUserData(locator, userData) {
    cy.get(locator).click()
    .type(userData)
    .should("have.value", userData);
}

export function inputUserSubjects(locator) {
    cy.get(locator).click()
    .type("maths{enter}")
    .should("contain", "Maths")
    .type("bio{enter}")
    .should("contain", "Biology");
}

export function chooseGender(locator, locatorChecked) {
    cy.get(locator).click({force: true});
    cy.get(locatorChecked)
    .should("have.css", "background-image");
}

export function chooseHobby(locatorSports, locatorReading, locatorMusic, locatorChecked) {
    cy.get(locatorSports).check({force: true});
    cy.get(locatorReading).check({force: true});
    cy.get(locatorMusic).check({force: true});
    cy.get(locatorChecked)
    .should("have.css", "background-image");
}

export function verifyValidInputData(locator) {
    cy.get(locator).should("have.css", "border-color", "rgb(40, 167, 69)");
}

export function verifySubmitCorrectData(childIndex, userSubmitData) {
    let locator = `${SUBMITED_FORM}:nth-child(${childIndex})`;
    cy.get(locator)
    .should("contain", userSubmitData);
}