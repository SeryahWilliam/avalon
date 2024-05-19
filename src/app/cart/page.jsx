"use client";
import React from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { Card, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices/cartSlice";
import Link from "next/link";

function ShoppingCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center text-custom-orange">
          Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/4">
            {cartItems.map((item) => (
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
                    <Button
                      color="failure"
                      className="ml-4"
                      onClick={() => handleRemove(item._id)}
                    >
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
