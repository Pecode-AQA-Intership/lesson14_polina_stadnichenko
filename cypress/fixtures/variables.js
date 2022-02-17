import { faker } from '@faker-js/faker';

export const USER_FIRST_NAME = faker.name.firstName();
export const USER_LAST_NAME = faker.name.lastName();
export const USER_EMAIL = faker.internet.email();
export const USER_AGE = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
export const USER_SALARY = Math.floor(Math.random() * (5000 - 100 + 1)) + 100;
export const USER_DEPARTMENT = "department";

export const EDIT_USER_FIRST_NAME = faker.name.firstName();
export const EDIT_USER_LAST_NAME = faker.name.lastName();
export const EDIT_USER_EMAIL = faker.internet.email();
export const EDIT_USER_AGE = Math.floor(Math.random() * (60 - 18 + 1)) + 18;
export const EDIT_USER_SALARY = Math.floor(Math.random() * (5000 - 100 + 1)) + 100;
export const EDIT_USER_DEPARTMENT = "Finance";
