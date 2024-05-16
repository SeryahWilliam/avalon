import { faker } from "@faker-js/faker";

const products = [];

for (let i = 0; i < 10; i++) {
  const product = {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    display_image: faker.image.url(),
    images: [faker.image.url()],
    seller_id: faker.string.uuid(),
    createdAt: faker.date.past().toISOString(),
  };
  products.push(product);
}

export default products;
