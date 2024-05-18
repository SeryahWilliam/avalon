import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { Card, Button } from "flowbite-react";
import Link from "next/link";

const sampleItems = [
  {
    _id: "1",
    name: "Handmade Necklace",
    description: "A beautiful handmade necklace.",
    price: "29.99",
    images: [],
    displayImage: "/images/accessories.jpeg",
    rating: 4,
    seller: "601d1c3b5f9b2a3b581f1a8b",
    category: "601d1c3b5f9b2a3b581f1a8c",
    createdAt: "2023-05-17T14:00:00.000Z",
    quantity: 1,
  },
  {
    _id: "2",
    name: "Vintage Clock",
    description: "A classic vintage clock.",
    price: "49.99",
    images: [],
    displayImage: "/images/beauty.jpeg",
    rating: 5,
    seller: "601d1c3b5f9b2a3b581f1a8b",
    category: "601d1c3b5f9b2a3b581f1a8c",
    createdAt: "2023-05-17T14:00:00.000Z",
    quantity: 2,
  },
];

function ShoppingCart() {
  const totalPrice = sampleItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-custom-orange">
          Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4">
            {sampleItems.map((item) => (
              <Card key={item._id} className="mb-4">
                <div className="flex items-center">
                  <img
                    src={item.displayImage}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div className="flex flex-col flex-grow">
                    <Link href={`/items/${item._id}`}>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                    </Link>

                    <p className="text-gray-600">
                      ${parseFloat(item.price).toFixed(2)}
                    </p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button color="failure" className="ml-4">
                      Remove
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="w-full md:w-1/4 md:ml-4 mt-4 md:mt-0">
            <Card>
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between mb-4 font-semibold">
                <span>Total</span>
                <span>${(totalPrice + 5).toFixed(2)}</span>
              </div>
              <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">
                Checkout
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default ShoppingCart;
