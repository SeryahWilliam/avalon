import { faker } from "@faker-js/faker";

const images = [];

for (let i = 0; i < 10; i++) {
  const src = faker.image.url();
  images.push(src);
}

export default images;
