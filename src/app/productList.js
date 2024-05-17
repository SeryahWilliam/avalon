import { faker } from "@faker-js/faker";

const products = [];

function generateRating() {
  const wholeNumber = faker.number.int({ min: 1, max: 5 });
  const addHalf = faker.datatype.boolean();
  return addHalf ? wholeNumber + 0.5 : wholeNumber;
}

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
    rating: generateRating(),
  };
  products.push(product);
}

export default products;
