import * as fakeData from "./variables.js"
import * as sort from "./sorting.js"
import { getInnerText, getNumbers } from "./getCellsData.js"
import * as selectors from "./selectors.js"

describe("Testing of Web Tables page", () => {
// 1. Create a new user and verify that user was added
    before(() =>{
        cy.visit("/webtables")
    })
    it("Check the functionality of adding a new user", () => {
        cy.get(selectors.ADD_BUTTON).click()
        cy.get(".modal-content").should("be.visible")

        cy.get(selectors.FIRST_NAME).click()
        .type(fakeData.USER_FIRST_NAME)
        .should("have.value", fakeData.USER_FIRST_NAME)

        cy.get(selectors.LAST_NAME).click()
        .type(fakeData.USER_LAST_NAME)
        .should("have.value", fakeData.USER_LAST_NAME)

        cy.get(selectors.EMAIL).click()
        .type(fakeData.USER_EMAIL)
        .should("have.value", fakeData.USER_EMAIL)

        cy.get(selectors.AGE).click()
        .type(fakeData.USER_AGE)
        .should("have.value", fakeData.USER_AGE)

        cy.get(selectors.SALARY).click()
        .type(fakeData.USER_SALARY)
        .should("have.value", fakeData.USER_SALARY)

        cy.get(selectors.DEPARTMENT).click()
        .type(fakeData.USER_DEPARTMENT)
        .should("have.value", fakeData.USER_DEPARTMENT)

        cy.get(selectors.SUBMIT).click()

        cy.get(selectors.TABLE).should("include.text", fakeData.USER_FIRST_NAME)
        .and("include.text", fakeData.USER_LAST_NAME)
        .and("include.text", fakeData.USER_EMAIL)
        .and("include.text", fakeData.USER_AGE)
        .and("include.text", fakeData.USER_SALARY)
        .and("include.text", fakeData.USER_DEPARTMENT)
    })

    // 2. Edit user and check that each field is editable
    it("Check the functionality of editing an existed user", () => {
        cy.get(selectors.EDIT_BUTTON).click()
        cy.get(selectors.POP_UP_FORM).should("be.visible")

        cy.get(selectors.FIRST_NAME).click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_FIRST_NAME)
        .should("have.value", fakeData.EDIT_USER_FIRST_NAME)

        cy.get(selectors.LAST_NAME).click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_LAST_NAME)
        .should("have.value", fakeData.EDIT_USER_LAST_NAME)

        cy.get(selectors.EMAIL).click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_EMAIL)
        .should("have.value", fakeData.EDIT_USER_EMAIL)

        cy.get(selectors.AGE).click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_AGE)
        .should("have.value", fakeData.EDIT_USER_AGE)

        cy.get(selectors.SALARY).click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_SALARY)
        .should("have.value", fakeData.EDIT_USER_SALARY)

        cy.get(selectors.DEPARTMENT).click().clear()
        .should("be.empty")
        .type(fakeData.EDIT_USER_DEPARTMENT)
        .should("have.value", fakeData.EDIT_USER_DEPARTMENT)

        cy.get(selectors.SUBMIT).click()

        cy.get(selectors.TABLE).should("include.text", fakeData.EDIT_USER_FIRST_NAME)
        .and("include.text", fakeData.EDIT_USER_LAST_NAME)
        .and("include.text", fakeData.EDIT_USER_EMAIL)
        .and("include.text", fakeData.EDIT_USER_AGE)
        .and("include.text", fakeData.EDIT_USER_SALARY)
        .and("include.text", fakeData.EDIT_USER_DEPARTMENT)
    })

    //3. Delete user from the table and check that user was deleted
    it("Check the functionality of deleting user", () => {
        cy.get(selectors.DELETE_BUTTON).click()
        cy.get(selectors.TABLE).should("not.include.text", "Cierra")
    })

    // 4. Check searching feature, check that appropriate user can be searched by each field
    it("Check the searching functionality", () => {
        cy.get(selectors.SEARCH).click()
        .type(fakeData.EDIT_USER_FIRST_NAME)
        .should("have.value", fakeData.EDIT_USER_FIRST_NAME)
        cy.get(selectors.TABLE).should("include.text", fakeData.EDIT_USER_FIRST_NAME)
        
        cy.get(selectors.SEARCH).clear()
        .type(fakeData.EDIT_USER_LAST_NAME)
        .should("have.value", fakeData.EDIT_USER_LAST_NAME)
        cy.get(selectors.TABLE).should("include.text", fakeData.EDIT_USER_LAST_NAME)
        
        cy.get(selectors.SEARCH).clear()
        .type(fakeData.EDIT_USER_AGE)
        .should("have.value", fakeData.EDIT_USER_AGE)
        cy.get(selectors.TABLE).should("include.text", fakeData.EDIT_USER_AGE)

        cy.get(selectors.SEARCH).clear()
        .type(fakeData.EDIT_USER_EMAIL)
        .should("have.value", fakeData.EDIT_USER_EMAIL)
        cy.get(selectors.TABLE).should("include.text", fakeData.EDIT_USER_EMAIL)

        cy.get(selectors.SEARCH).clear()
        .type(fakeData.EDIT_USER_SALARY)
        .should("have.value", fakeData.EDIT_USER_SALARY)
        cy.get(selectors.TABLE).should("include.text", fakeData.EDIT_USER_SALARY)

        cy.get(selectors.SEARCH).clear()
        .type(fakeData.EDIT_USER_DEPARTMENT)
        .should("have.value", fakeData.EDIT_USER_DEPARTMENT)
        cy.get(selectors.TABLE).should("include.text", fakeData.EDIT_USER_DEPARTMENT)
        cy.get(selectors.SEARCH).clear()
    })

    // 5. Sorting
    it("Check the ability to sort the table by first names ascending and descending", () => {
        cy.get(selectors.SORT_FIRST_NAMES).click()
        .should("have.class", "-sort-asc")
        cy.get(selectors.COLUMN_FIRST_NAMES)
        .then(getInnerText)
        .then((firstNames) => {
          let sortedFirstNames = sort.stringSortASC(firstNames);
          expect(firstNames).to.deep.equal(sortedFirstNames);
        })

        cy.get(selectors.SORT_FIRST_NAMES).click()
        .should("have.class", "-sort-desc")
        cy.get(selectors.COLUMN_FIRST_NAMES)
        .then(getInnerText)
        .then((firstNames) => {
          let sortedFirstNames = sort.stringSortDESC(firstNames);
          expect(firstNames).to.deep.equal(sortedFirstNames);
        })
    })

    it ("Check the ability to sort the table by last names ascending and descending", () => {
        cy.get(selectors.SORT_LAST_NAMES).click()
        .should("have.class", "-sort-asc")
        cy.get(selectors.COLUMN_LAST_NAMES)
        .then(getInnerText)
        .then((lastNames) => {
          let sortedLastNames = sort.stringSortASC(lastNames);
          expect(lastNames).to.deep.equal(sortedLastNames);
        })

        cy.get(selectors.SORT_LAST_NAMES).click()
        .should("have.class", "-sort-desc")
        cy.get(selectors.COLUMN_LAST_NAMES)
        .then(getInnerText)
        .then((lastNames) => {
          let sortedLastNames = sort.stringSortDESC(lastNames);
          expect(lastNames).to.deep.equal(sortedLastNames);
        })
    })

    it("Check the ability to sort the table by age ascending and descending", () => {
        cy.get(selectors.SORT_AGES).click()
        .should("have.class", "-sort-asc")
        cy.get(selectors.COLUMN_AGES)
        .then(getInnerText)
        .then(getNumbers)
        .then((ages) => {
          let sortedAges = sort.numberSortASC(ages);
          expect(ages).to.deep.equal(sortedAges);
        })

        cy.get(selectors.SORT_AGES).click()
        .should("have.class", "-sort-desc")
        cy.get(selectors.COLUMN_AGES)
        .then(getInnerText)
        .then(getNumbers)
        .then((ages) => {
          let sortedAges = sort.numberSortDESC(ages);
          expect(ages).to.deep.equal(sortedAges);
        })
    })

    it("Check the ability to sort the table by email ascending and descending", () => {
        cy.get(selectors.SORT_EMAILS).click()
        .should("have.class", "-sort-asc")
        cy.get(selectors.COLUMN_EMAILS)
        .then(getInnerText)
        .then((emails) => {
          let sortedEmails = sort.stringSortASC(emails);
          expect(emails).to.deep.equal(sortedEmails);
        })

        cy.get(selectors.SORT_EMAILS).click()
        .should("have.class", "-sort-desc")
        cy.get(selectors.COLUMN_EMAILS)
        .then(getInnerText)
        .then((emails) => {
          let sortedEmails = sort.stringSortDESC(emails);
          expect(emails).to.deep.equal(sortedEmails);
        })
    })

    it("Check the ability to sort the table by salary ascending and descending", () => {
        cy.get(selectors.SORT_SALARY).click()
        .should("have.class", "-sort-asc")
        cy.get(selectors.COLUMN_SALARY)
        .then(getInnerText)
        .then(getNumbers)
        .then((salary) => {
          let sortedSalary = sort.numberSortASC(salary);
          expect(salary).to.deep.equal(sortedSalary);
        })

        cy.get(selectors.SORT_SALARY).click()
        .should("have.class", "-sort-desc")
        cy.get(selectors.COLUMN_SALARY)
        .then(getInnerText)
        .then(getNumbers)
        .then((salary) => {
          let sortedSalary = sort.numberSortDESC(salary);
          expect(salary).to.deep.equal(sortedSalary);
        })
    })

    it("Check the ability to sort the table by department ascending and descending", () => {
        cy.get(selectors.SORT_DEPARTMENTS).click()
        .should("have.class", "-sort-asc")
        cy.get(selectors.COLUMN_DEPARTMENTS)
        .then(getInnerText)
        .then((departments) => {
          let sortedDepartments = sort.stringSortASC(departments);
          expect(departments).to.deep.equal(sortedDepartments);
        })

        cy.get(selectors.SORT_DEPARTMENTS).click()
        .should("have.class", "-sort-desc")
        cy.get(selectors.COLUMN_DEPARTMENTS)
        .then(getInnerText)
        .then((departments) => {
          let sortedDepartments = sort.stringSortDESC(departments);
          expect(departments).to.deep.equal(sortedDepartments);
        })
    })
})

