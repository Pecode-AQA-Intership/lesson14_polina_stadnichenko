export default class TextBox {
    visitPage() {
        return cy.visit("/text-box");
    }

    inputUserData(locator, userData) {
        cy.get(locator).click().type(userData)
        .should("have.value", userData);
    }

    getSubmitButton(locator) {
        cy.get(locator).click();
    }

    verifyDataAreCorrect(locator, userSubmitData) {
        cy.get(locator).should("include.text", userSubmitData);
    }

}