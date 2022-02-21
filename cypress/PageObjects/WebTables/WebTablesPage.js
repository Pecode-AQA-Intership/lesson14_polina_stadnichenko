import { SEARCH, TABLE, SORT_ACTION } from "./locators.js";

export default class WebTables {
    visitPage() {
        cy.visit("/webtables");
    }

    numberSortASC(array) {
        return array.sort((a, b) => a - b);
    }
    numberSortDESC(array) {
        return array.sort((a, b) => b - a);
    }

    stringSortASC(array) {
        return array.sort((currentElement, nextElement) => 
        (currentElement > nextElement) ? 1 : (currentElement < nextElement) ? -1 : 0);
    }
        
    stringSortDESC(array) {
        return array.sort((currentElement, nextElement) => 
        (currentElement > nextElement) ? -1 : (currentElement < nextElement) ? 1 : 0);
    }

    getInnerText(cells) {
        cells.map((cell) => cell.innerText);
    }
    getNumbers(numbers) {
        numbers.map((number) => parseFloat(number));
    }
    
    buttonsClick(locator) {
        cy.get(locator).click();    
    }

    inputUserData(locator, userData) {
        cy.get(locator).click().type(userData)
        .should("have.value", userData);
    }
    
    editUserData(locator, newUserData) {
        cy.get(locator).click().clear()
        .should("be.empty")
        .type(newUserData)
        .should("have.value", newUserData);
    }

    checkAddedData(firstName, lastName, email, age, salary, department) {
        cy.get(TABLE).should("include.text", firstName)
        .and("include.text", lastName)
        .and("include.text", email)
        .and("include.text", age)
        .and("include.text", salary)
        .and("include.text", department);
    }

    searchUser(userData) {
        cy.get(SEARCH).click()
        .type(userData)
        .should("have.value", userData);
        cy.get(TABLE).should("include.text", userData);
        cy.get(SEARCH).clear();
    }

    sortStringData(locatorSort, sortingClass, sortingColumn) {
        cy.get(locatorSort).click()
        .should("have.class", sortingClass);
        cy.get(sortingColumn)
        .then(this.getInnerText)
        .then((data) => {
            if (sortingClass === "-sort-asc") {
                let sortedData = this.stringSortASC(data);
                expect(data).to.deep.equal(sortedData); 
            } else {
                let sortedData = this.stringSortDESC(data);
                expect(data).to.deep.equal(sortedData);
            }   
        });
    }

    sortNumberData(locatorSort, sortingClass, sortingColumn) {
        cy.get(locatorSort).click()
        .should("have.class", sortingClass);
        cy.get(sortingColumn)
        .then(this.getInnerText)
        .then(this.getNumbers)
        .then((data) => {
            if (sortingClass === "-sort-asc") {
                let sortedData = this.numberSortASC(data);
                expect(data).to.deep.equal(sortedData); 
            } else {
                let sortedData = this.numberSortDESC(data);
                expect(data).to.deep.equal(sortedData);
            }   
        });
    }

    verifyActionColumn(sortingClass) {
        cy.get(SORT_ACTION).click()
        .should("not.have.class", sortingClass);
    }

}