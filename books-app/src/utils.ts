// ESM
import { faker } from '@faker-js/faker';
import IUser from "./types/IUser.ts";


export function createRandomUser(): IUser {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}