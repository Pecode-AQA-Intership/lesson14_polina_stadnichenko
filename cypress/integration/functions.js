export function inputUserData(locator, userData) {
    cy.get(locator).click()
    .type(userData)
    .should("have.value", userData)
}

export function inputUserSubjects(locator, userData) {
    cy.get(locator).click()
    .type(userData)
    .should("have.text", userData)
}

export function chooseGender(locator, locatorChecked) {
    cy.get(locator).click({force: true})
    cy.get(locatorChecked)
    .should("have.css", "background-image")
}

export function chooseHobby(locator1, locator2, locator3, locatorChecked) {
    // cy.get(locator1).click({force: true})
    // cy.get(locator2).click({force: true})
    // cy.get(locator3).click({force: true})
    cy.get(locator1).check({force: true})
    cy.get(locator2).check({force: true})
    cy.get(locator3).check({force: true})
    cy.get(locatorChecked)
    .should("have.css", "background-image")
}