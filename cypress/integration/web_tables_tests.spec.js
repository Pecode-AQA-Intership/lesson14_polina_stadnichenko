import * as data from "../PageObjects/WebTables/fakeUserData.js";
import * as locator from "../PageObjects/WebTables/locators.js";
import WebTables from "../PageObjects/WebTables/WebTablesPage.js";

let webTables = new WebTables();

describe("Testing of Web Tables page", () => {
    before(() =>{
      webTables.visitPage();
    });

    it("Check the functionality of adding a new user", () => {
      webTables.buttonsClick(locator.ADD_BUTTON);
      cy.get(".modal-content").should("be.visible");

      webTables.inputUserData(locator.FIRST_NAME, data.USER_FIRST_NAME);
      webTables.inputUserData(locator.LAST_NAME, data.USER_LAST_NAME);
      webTables.inputUserData(locator.EMAIL, data.USER_EMAIL);
      webTables.inputUserData(locator.AGE, data.USER_AGE);
      webTables.inputUserData(locator.SALARY, data.USER_SALARY);
      webTables.inputUserData(locator.DEPARTMENT, data.USER_DEPARTMENT);

      webTables.buttonsClick(locator.SUBMIT_BUTTON);

      webTables.checkAddedData(
        data.USER_FIRST_NAME, 
        data.USER_LAST_NAME, 
        data.USER_EMAIL, 
        data.USER_AGE,
        data.USER_SALARY,
        data.USER_DEPARTMENT);
    });

    it("Check the functionality of editing an existed user", () => {
      webTables.buttonsClick(locator.EDIT_BUTTON);
      cy.get(locator.POP_UP_FORM).should("be.visible");

      webTables.editUserData(locator.FIRST_NAME, data.EDIT_USER_FIRST_NAME);
      webTables.editUserData(locator.LAST_NAME, data.EDIT_USER_LAST_NAME);
      webTables.editUserData(locator.EMAIL, data.EDIT_USER_EMAIL);
      webTables.editUserData(locator.AGE, data.EDIT_USER_AGE);
      webTables.editUserData(locator.SALARY, data.EDIT_USER_SALARY);
      webTables.editUserData(locator.DEPARTMENT, data.EDIT_USER_DEPARTMENT);

      webTables.buttonsClick(locator.SUBMIT_BUTTON);

      webTables.checkAddedData( 
        data.EDIT_USER_FIRST_NAME, 
        data.EDIT_USER_LAST_NAME, 
        data.EDIT_USER_EMAIL, 
        data.EDIT_USER_AGE,
        data.EDIT_USER_SALARY,
        data.EDIT_USER_DEPARTMENT);
    });

    it("Check the functionality of deleting user", () => {
      webTables.buttonsClick(locator.DELETE_BUTTON);
      cy.get(locator.TABLE).should("not.include.text", "Cierra");
    });

    it("Check the searching functionality", () => {
      webTables.searchUser(data.EDIT_USER_FIRST_NAME);
      webTables.searchUser(data.EDIT_USER_LAST_NAME);
      webTables.searchUser(data.EDIT_USER_AGE);
      webTables.searchUser(data.EDIT_USER_EMAIL);
      webTables.searchUser(data.EDIT_USER_SALARY);
      webTables.searchUser(data.EDIT_USER_DEPARTMENT);    
    });

    it("Check the ability to sort the table by first names ascending and descending", () => {

      webTables.sortStringData(locator.SORT_FIRST_NAMES, "-sort-asc", locator.COLUMN_FIRST_NAMES);
      webTables.sortStringData(locator.SORT_FIRST_NAMES, "-sort-desc", locator.COLUMN_FIRST_NAMES);
    });

    it("Check the ability to sort the table by last names ascending and descending", () => {
      webTables.sortStringData(locator.SORT_LAST_NAMES, "-sort-asc", locator.COLUMN_LAST_NAMES);
      webTables.sortStringData(locator.SORT_LAST_NAMES, "-sort-desc", locator.COLUMN_LAST_NAMES);
    });

    it("Check the ability to sort the table by age ascending and descending", () => {
      webTables.sortNumberData(locator.SORT_AGES, "-sort-asc", locator.COLUMN_AGES);
      webTables.sortNumberData(locator.SORT_AGES, "-sort-desc", locator.COLUMN_AGES);
    });

    it("Check the ability to sort the table by email ascending and descending", () => {
      webTables.sortStringData(locator.SORT_EMAILS, "-sort-asc", locator.COLUMN_EMAILS);
      webTables.sortStringData(locator.SORT_EMAILS, "-sort-desc", locator.COLUMN_EMAILS);
    });

    it("Check the ability to sort the table by salary ascending and descending", () => {
      webTables.sortNumberData(locator.SORT_SALARY, "-sort-asc", locator.COLUMN_SALARY);
      webTables.sortNumberData(locator.SORT_SALARY, "-sort-desc", locator.COLUMN_SALARY);
    });

    it("Check the ability to sort the table by department ascending and descending", () => {
      webTables.sortStringData(locator.SORT_DEPARTMENTS, "-sort-asc", locator.COLUMN_DEPARTMENTS);
      webTables.sortStringData(locator.SORT_DEPARTMENTS, "-sort-desc", locator.COLUMN_DEPARTMENTS);
    });

    it("Verify that Action column isn't sortable", () => {
      webTables.verifyActionColumn("-sort-asc");
      webTables.verifyActionColumn("-sort-desc");
    });
})
