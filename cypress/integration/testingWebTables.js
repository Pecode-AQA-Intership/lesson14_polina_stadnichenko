import * as fakeData from "./variables.js"
import * as sort from "./sorting.js"
import { getInnerText, getNumbers } from "./getCellsData.js"

describe("Testing of Web Tables page", () => {
// 1. Create a new user and verify that user was added
    before(() =>{
        cy.visit("/webtables")
    })
    it("Check the functionality of adding a new user", () => {
        cy.get("#addNewRecordButton").click()
        cy.get(".modal-content").should("be.visible")

        cy.get("#firstName").click()
        .type(fakeData.USER_FIRST_NAME)
        .should("have.value", fakeData.USER_FIRST_NAME)

        cy.get("#lastName").click()
        .type(fakeData.USER_LAST_NAME)
        .should("have.value", fakeData.USER_LAST_NAME)

        cy.get("#userEmail").click()
        .type(fakeData.USER_EMAIL)
        .should("have.value", fakeData.USER_EMAIL)

        cy.get("#age").click()
        .type(fakeData.USER_AGE)
        .should("have.value", fakeData.USER_AGE)

        cy.get("#salary").click()
        .type(fakeData.USER_SALARY)
        .should("have.value", fakeData.USER_SALARY)

        cy.get("#department").click()
        .type(fakeData.USER_DEPARTMENT)
        .should("have.value", fakeData.USER_DEPARTMENT)

        cy.get("#submit").click()

        cy.get(".rt-tbody").should("include.text", fakeData.USER_FIRST_NAME)
        .and("include.text", fakeData.USER_LAST_NAME)
        .and("include.text", fakeData.USER_EMAIL)
        .and("include.text", fakeData.USER_AGE)
        .and("include.text", fakeData.USER_SALARY)
        .and("include.text", fakeData.USER_DEPARTMENT)
    })

    // 2. Edit user and check that each field is editable
    it("Check the functionality of editing an existed user", () => {
        cy.get("#edit-record-4").click()
        cy.get(".modal-content").should("be.visible")

        cy.get("#firstName").click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_FIRST_NAME)
        .should("have.value", fakeData.EDIT_USER_FIRST_NAME)

        cy.get("#lastName").click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_LAST_NAME)
        .should("have.value", fakeData.EDIT_USER_LAST_NAME)

        cy.get("#userEmail").click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_EMAIL)
        .should("have.value", fakeData.EDIT_USER_EMAIL)

        cy.get("#age").click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_AGE)
        .should("have.value", fakeData.EDIT_USER_AGE)

        cy.get("#salary").click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_SALARY)
        .should("have.value", fakeData.EDIT_USER_SALARY)

        cy.get("#department").click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_DEPARTMENT)
        .should("have.value", fakeData.EDIT_USER_DEPARTMENT)

        cy.get("#submit").click()

        cy.get(".rt-tbody").should("include.text", fakeData.EDIT_USER_FIRST_NAME)
        .and("include.text", fakeData.EDIT_USER_LAST_NAME)
        .and("include.text", fakeData.EDIT_USER_EMAIL)
        .and("include.text", fakeData.EDIT_USER_AGE)
        .and("include.text", fakeData.EDIT_USER_SALARY)
        .and("include.text", fakeData.EDIT_USER_DEPARTMENT)
    })

    //3. Delete user from the table and check that user was deleted
    it("Check the functionality of deleting user", () => {
        cy.get("#delete-record-1").click()
        cy.get(".rt-tbody").should("not.include.text", "Cierra")
    })

    // 4. Check searching feature, check that appropriate user can be searched by each field
    it("Check the searching functionality", () => {
        cy.get("#searchBox").click()
        .type(fakeData.EDIT_USER_FIRST_NAME)
        .should("have.value", fakeData.EDIT_USER_FIRST_NAME)
        cy.get(".rt-tbody").should("include.text", fakeData.EDIT_USER_FIRST_NAME)
        
        cy.get("#searchBox").clear()
        .type(fakeData.EDIT_USER_LAST_NAME)
        .should("have.value", fakeData.EDIT_USER_LAST_NAME)
        cy.get(".rt-tbody").should("include.text", fakeData.EDIT_USER_LAST_NAME)
        
        cy.get("#searchBox").clear()
        .type(fakeData.EDIT_USER_AGE)
        .should("have.value", fakeData.EDIT_USER_AGE)
        cy.get(".rt-tbody").should("include.text", fakeData.EDIT_USER_AGE)

        cy.get("#searchBox").clear()
        .type(fakeData.EDIT_USER_EMAIL)
        .should("have.value", fakeData.EDIT_USER_EMAIL)
        cy.get(".rt-tbody").should("include.text", fakeData.EDIT_USER_EMAIL)

        cy.get("#searchBox").clear()
        .type(fakeData.EDIT_USER_SALARY)
        .should("have.value", fakeData.EDIT_USER_SALARY)
        cy.get(".rt-tbody").should("include.text", fakeData.EDIT_USER_SALARY)

        cy.get("#searchBox").clear()
        .type(fakeData.EDIT_USER_DEPARTMENT)
        .should("have.value", fakeData.EDIT_USER_DEPARTMENT)
        cy.get(".rt-tbody").should("include.text", fakeData.EDIT_USER_DEPARTMENT)
        cy.get("#searchBox").clear()
    })

    // 5. Sorting
    it("Check the ability to sort the table by first names ascending and descending", () => {
        cy.get(".rt-th:nth-child(1)").click()
        cy.get(".rt-th:nth-child(1)").should("have.class", "-sort-asc")
        cy.get(".rt-tr-group .rt-td:nth-child(1)")
        .then(getInnerText)
        .then((firstNames) => {
          let sortedFirstNames = sort.stringSortASC(firstNames);
          expect(firstNames).to.deep.equal(sortedFirstNames);
        })

        cy.get(".rt-th:nth-child(1)").click()
        cy.get(".rt-th:nth-child(1)").should("have.class", "-sort-desc")
        cy.get(".rt-tr-group .rt-td:nth-child(1)")
        .then(getInnerText)
        .then((firstNames) => {
          let sortedFirstNames = sort.stringSortDESC(firstNames);
          expect(firstNames).to.deep.equal(sortedFirstNames);
        })
    })

    it ("Check the ability to sort the table by last names ascending and descending", () => {
        cy.get(".rt-th:nth-child(2)").click()
        cy.get(".rt-th:nth-child(2)").should("have.class", "-sort-asc")
        cy.get(".rt-tr-group .rt-td:nth-child(2)")
        .then(getInnerText)
        .then((lastNames) => {
          let sortedLastNames = sort.stringSortASC(lastNames);
          expect(lastNames).to.deep.equal(sortedLastNames);
        })

        cy.get(".rt-th:nth-child(2)").click()
        cy.get(".rt-th:nth-child(2)").should("have.class", "-sort-desc")
        cy.get(".rt-tr-group .rt-td:nth-child(2)")
        .then(getInnerText)
        .then((lastNames) => {
          let sortedLastNames = sort.stringSortDESC(lastNames);
          expect(lastNames).to.deep.equal(sortedLastNames);
        })
    })

    it("Check the ability to sort the table by age ascending and descending", () => {
        cy.get(".rt-th:nth-child(3)").click()
        cy.get(".rt-th:nth-child(3)").should("have.class", "-sort-asc")
        cy.get(".rt-tr-group .rt-td:nth-child(3)")
        .then(getInnerText)
        .then(getNumbers)
        .then((ages) => {
          let sortedAges = sort.numberSortASC(ages);
          expect(ages).to.deep.equal(sortedAges);
        })

        cy.get(".rt-th:nth-child(3)").click()
        cy.get(".rt-th:nth-child(3)").should("have.class", "-sort-desc")
        cy.get(".rt-tr-group .rt-td:nth-child(3)")
        .then(getInnerText)
        .then(getNumbers)
        .then((ages) => {
          let sortedAges = sort.numberSortDESC(ages);
          expect(ages).to.deep.equal(sortedAges);
        })
    })

    it("Check the ability to sort the table by email ascending and descending", () => {
        cy.get(".rt-th:nth-child(4)").click()
        cy.get(".rt-th:nth-child(4)").should("have.class", "-sort-asc")
        cy.get(".rt-tr-group .rt-td:nth-child(4)")
        .then(getInnerText)
        .then((emails) => {
          let sortedEmails = sort.stringSortASC(emails);
          expect(emails).to.deep.equal(sortedEmails);
        })

        cy.get(".rt-th:nth-child(4)").click()
        cy.get(".rt-th:nth-child(4)").should("have.class", "-sort-desc")
        cy.get(".rt-tr-group .rt-td:nth-child(4)")
        .then(getInnerText)
        .then((emails) => {
          let sortedEmails = sort.stringSortDESC(emails);
          expect(emails).to.deep.equal(sortedEmails);
        })
    })

    it("Check the ability to sort the table by salary ascending and descending", () => {
        cy.get(".rt-th:nth-child(5)").click()
        cy.get(".rt-th:nth-child(5)").should("have.class", "-sort-asc")
        cy.get(".rt-tr-group .rt-td:nth-child(5)")
        .then(getInnerText)
        .then(getNumbers)
        .then((ages) => {
          let sortedAges = sort.numberSortASC(ages);
          expect(ages).to.deep.equal(sortedAges);
        })

        cy.get(".rt-th:nth-child(5)").click()
        cy.get(".rt-th:nth-child(5)").should("have.class", "-sort-desc")
        cy.get(".rt-tr-group .rt-td:nth-child(5)")
        .then(getInnerText)
        .then(getNumbers)
        .then((ages) => {
          let sortedAges = sort.numberSortDESC(ages);
          expect(ages).to.deep.equal(sortedAges);
        })
    })

    it("Check the ability to sort the table by department ascending and descending", () => {
        cy.get(".rt-th:nth-child(6)").click()
        cy.get(".rt-th:nth-child(6)").should("have.class", "-sort-asc")
        cy.get(".rt-tr-group .rt-td:nth-child(6)")
        .then(getInnerText)
        .then((departments) => {
          let sortedDepartments = sort.stringSortASC(departments);
          expect(departments).to.deep.equal(sortedDepartments);
        })

        cy.get(".rt-th:nth-child(6)").click()
        cy.get(".rt-th:nth-child(6)").should("have.class", "-sort-desc")
        cy.get(".rt-tr-group .rt-td:nth-child(6)")
        .then(getInnerText)
        .then((departments) => {
          let sortedDepartments = sort.stringSortDESC(departments);
          expect(departments).to.deep.equal(sortedDepartments);
        })
    })
})

