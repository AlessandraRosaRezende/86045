const { faker } = require('@faker-js/faker');

faker.locale = 'pt_BR';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateUser = () => {
  let numOfProducts = generateRandomNumber(1, 10);
  let products = [];

  for (let i = 0; i < numOfProducts; i++) {
    products.push(generateProduct());
  }

  return {
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    gender: faker.person.sex(),
    birthDate: faker.date.past(),
    phone: faker.phone.number(),
    products,
    image: faker.image.avatar(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email()
  };
};

const generateProduct = () => {
  return {
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: generateRandomNumber(1, 100),
    id: faker.database.mongodbObjectId(),
    image: faker.image.url()
  };
};

module.exports = { generateUser, generateProduct, generateRandomNumber };