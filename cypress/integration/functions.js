export function inputUserData(locator, userData) {
    cy.get(locator).click()
    .type(userData)
    .should("have.value", userData)
}

export function verifyDataAreCorrect(locator, userSubmitData) {
    cy.get(locator).should("include.text", userSubmitData)
}