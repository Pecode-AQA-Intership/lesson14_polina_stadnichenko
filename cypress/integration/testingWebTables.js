import { faker } from '@faker-js/faker';
// import { it } from 'mocha';
// import { describe } from 'mocha';

const USER_FIRST_NAME = faker.name.firstName();
const USER_LAST_NAME = faker.name.lastName();
const USER_EMAIL = faker.internet.email();
const USER_AGE = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
const USER_SALARY = Math.floor(Math.random() * (5000 - 100 + 1)) + 100;
const USER_DEPARTMENT = "department";

const EDIT_USER_FIRST_NAME = faker.name.firstName();
const EDIT_USER_LAST_NAME = faker.name.lastName();
const EDIT_USER_EMAIL = faker.internet.email();
const EDIT_USER_AGE = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
const EDIT_USER_SALARY = Math.floor(Math.random() * (5000 - 100 + 1)) + 100;
const EDIT_USER_DEPARTMENT = "Finance";

describe("Testing of Web Tables page", () =>{
// 1. Create a new user and verify that user was added
    before(() =>{
        cy.visit("/webtables")
    })
    it("Check the functionality of adding a new user", () => {
        cy.get("#addNewRecordButton").click()
        cy.get(".modal-content").should("be.visible")

        cy.get("#firstName").click()
        .type(USER_FIRST_NAME)
        .should("have.value", USER_FIRST_NAME)

        cy.get("#lastName").click()
        .type(USER_LAST_NAME)
        .should("have.value", USER_LAST_NAME)

        cy.get("#userEmail").click()
        .type(USER_EMAIL)
        .should("have.value", USER_EMAIL)

        cy.get("#age").click()
        .type(USER_AGE)
        .should("have.value", USER_AGE)

        cy.get("#salary").click()
        .type(USER_SALARY)
        .should("have.value", USER_SALARY)

        cy.get("#department").click()
        .type(USER_DEPARTMENT)
        .should("have.value", USER_DEPARTMENT)

        cy.get("#submit").click()
        //cy.get(".modal-content").should("not.be.visible")

        cy.get(".rt-tbody").should("include.text", USER_FIRST_NAME)
        .and("include.text", USER_LAST_NAME)
        .and("include.text", USER_EMAIL)
        .and("include.text", USER_AGE)
        .and("include.text", USER_SALARY)
        .and("include.text", USER_DEPARTMENT)
    })

    // 2. Edit user and check that each field is editable
    it("Check the functionality of editing an existed user", () => {
        cy.get("#edit-record-4").click()
        cy.get(".modal-content").should("be.visible")

        cy.get("#firstName").click().clear()
        .should("be.empty")
        .type(EDIT_USER_FIRST_NAME)
        .should("have.value", EDIT_USER_FIRST_NAME)

        cy.get("#lastName").click().clear()
        .should("be.empty")
        .type(EDIT_USER_LAST_NAME)
        .should("have.value", EDIT_USER_LAST_NAME)

        cy.get("#userEmail").click().clear()
        .should("be.empty")
        .type(EDIT_USER_EMAIL)
        .should("have.value", EDIT_USER_EMAIL)

        cy.get("#age").click().clear()
        .should("be.empty")
        .type(EDIT_USER_AGE)
        .should("have.value", EDIT_USER_AGE)

        cy.get("#salary").click().clear()
        .should("be.empty")
        .type(EDIT_USER_SALARY)
        .should("have.value", EDIT_USER_SALARY)

        cy.get("#department").click().clear()
        .should("be.empty")
        .type(EDIT_USER_DEPARTMENT)
        .should("have.value", EDIT_USER_DEPARTMENT)

        cy.get("#submit").click()

        cy.get(".rt-tbody").should("include.text", EDIT_USER_FIRST_NAME)
        .and("include.text", EDIT_USER_LAST_NAME)
        .and("include.text", EDIT_USER_EMAIL)
        .and("include.text", EDIT_USER_AGE)
        .and("include.text", EDIT_USER_SALARY)
        .and("include.text", EDIT_USER_DEPARTMENT)
    })

    //3. Delete user from the table and check that user was deleted
    it("Check the functionality of deleting user", () => {
        cy.get("#delete-record-1").click()
        cy.get(".rt-tbody").should("not.include.text", "Cierra")
    })

    // 4. Check searching feature, check that appropriate user can be searched by each field
    it("Check the searching functionality", () => {
        cy.get("#searchBox").click()
        .type(EDIT_USER_FIRST_NAME)
        .should("have.value", EDIT_USER_FIRST_NAME)
        cy.get(".rt-tbody").should("include.text", EDIT_USER_FIRST_NAME)
    })
})

