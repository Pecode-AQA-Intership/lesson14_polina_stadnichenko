import { faker } from '@faker-js/faker';
export const NAME_TEST_DATA = faker.name.findName();
export const EMAIL_TEST_DATA = faker.internet.email();
export const CURRENT_ADDRESS_DATA = faker.address.city() + ", " + faker.address.streetName() + ", " + faker.address.secondaryAddress();
export const PERMANENT_ADDRESS_DATA = faker.address.city() + ", " + faker.address.streetName() + ", " + faker.address.secondaryAddress();