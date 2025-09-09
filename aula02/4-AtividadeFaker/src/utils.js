const { faker } = require('@faker-js/faker');

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
    id: faker.database.mongodbObjectId(),
    name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    gender: faker.person.sex(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    birthDate: faker.date.past({ years: 30 }), // Média de 30 anos no passado
    image: faker.image.avatar(),
    role: faker.helpers.arrayElement(["cliente", "vendedor"]), // Define aleatoriamente o papel
    isPremium: faker.datatype.boolean(), // Define aleatoriamente se o usuário é premium
    jobTitle: faker.person.jobTitle(), // Adiciona ocupação profissional
    products,
  };
};

const generateProduct = () => {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: generateRandomNumber(1, 100),
    code: faker.string.alphanumeric(8), // Código alfanumérico do produto
    description: faker.commerce.productDescription(), // Descrição do produto
    image: faker.image.url(),
  };
};

module.exports = { generateUser, generateProduct, generateRandomNumber };
