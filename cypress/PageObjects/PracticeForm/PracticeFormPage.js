import * as selector from "./locators.js";
export default class PracticeForm {
    visitPage() {
        return cy.visit("/automation-practice-form");
    }

    inputUserData(locator, userData) {
        cy.get(locator).click()
        .type(userData)
        .should("have.value", userData);
    }

    inputUserSubjects() {
        cy.get(selector.SUBJECTS).click()
        .type("maths{enter}")
        .should("contain", "Maths")
        .type("bio{enter}")
        .should("contain", "Biology");
    }

    chooseGender(locator) {
        cy.get(locator).click({force: true});
        cy.get(selector.GENDER_CHECKED)
        .should("have.css", "background-image");
    }

    chooseHobby() {
        cy.get(selector.HOBBIES_SPORTS).check({force: true});
        cy.get(selector.HOBBIES_READING).check({force: true});
        cy.get(selector.HOBBIES_MUSIC).check({force: true});
        cy.get(selector.HOBBIES_CHECKED)
        .should("have.css", "background-image");
    }

    verifyValidInputData(locator) {
        cy.get(locator).should("have.css", "border-color", "rgb(40, 167, 69)");
    }

    verifySubmitCorrectData(childIndex, userSubmitData) {
        let locator = `${selector.SUBMITED_FORM}:nth-child(${childIndex})`;
        cy.get(locator)
        .should("contain", userSubmitData);
    }

    uploadPicture(file) {
        cy.get(selector.UPLOAD_PICTURE).click().selectFile(file);
    }

    selectStateAndCity(locator, input, stateOrCity) {
        cy.get(locator).click()
        .type(input)
        .should("contain", stateOrCity);
    }

    chooseBirthDate() {
        cy.get(selector.DATE_OF_BIRTH).click();
        cy.get(selector.CHOOSE_DATE_CONTAINER).should("be.visible");
        cy.get(selector.SELECT_MONTH).select("January");
        cy.get(selector.SELECT_YEAR).select("1999");
        cy.get(selector.CURRENT_MONTH_YEAR).should("have.text", "January 1999");
        cy.get(selector.SELECT_DAY).first().click();
        cy.get(selector.DATE_OF_BIRTH).should("have.value", "13 Jan 1999");
    }
}