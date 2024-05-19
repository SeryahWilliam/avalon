import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Item from "./models/Item.js";
import User from "./models/User.js";
import Category from "./models/Category.js";
import connectToDatabase from "./lib/mongodb.js";

dotenv.config({ path: ".env.local" });

// Connect to MongoDB
await connectToDatabase();

function generateRating() {
  const wholeNumber = faker.number.int({ min: 1, max: 5 });
  const addHalf = faker.datatype.boolean();
  return addHalf ? wholeNumber + 0.5 : wholeNumber;
}

// Function to seed categories
async function seedCategories() {
  // Clear existing categories
  await Category.deleteMany({});

  const categories = [];

  for (let i = 0; i < 10; i++) {
    const category = new Category({
      name: faker.commerce.department(),
      description: faker.commerce.productDescription(),
    });
    categories.push(category);
  }

  await Category.insertMany(categories);
  console.log("10 categories have been successfully seeded.");
  return categories;
}

// Function to seed items
async function seedItems(users, categories) {
  // Clear existing items
  await Item.deleteMany({});

  const items = [];

  for (let i = 0; i < 50; i++) {
    const item = new Item({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      displayImage: faker.image.url(),
      rating: generateRating(),
      seller: faker.helpers.arrayElement(users)._id,
      category: faker.helpers.arrayElement(categories)._id,
      createdAt: faker.date.past(),
    });
    items.push(item);
  }

  await Item.insertMany(items);
  console.log("50 items have been successfully seeded.");
}

// Main function to seed the database
async function seedDatabase() {
  const users = await User.find();
  if (users.length === 0) {
    console.log(
      "Please ensure there are users in the database before seeding items."
    );
    return;
  }

  const categories = await seedCategories();
  await seedItems(users, categories);
}

seedDatabase().then(() => {
  mongoose.connection.close();
  console.log("Database connection closed.");
});
