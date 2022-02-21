import { faker } from "@faker-js/faker";

export const USER_FIRST_NAME = faker.name.firstName();
export const USER_LAST_NAME = faker.name.lastName();
export const USER_EMAIL = faker.internet.email();
export const USER_MOBILE_NUMBER = faker.phone.phoneNumber("##########");
export const USER_CURRENT_ADDRESS = faker.address.streetName() + ", " + faker.address.secondaryAddress();