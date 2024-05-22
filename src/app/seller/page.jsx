"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../components/ProtectedRoute";
import { useSession } from "next-auth/react";
import { TextInput, Button, Textarea, Select } from "flowbite-react";
import Loader from "@/app/components/Loader";
import useCategories from "@/app/hooks/useCategories";

function SellerProfile() {
  const { data: session, status } = useSession();
  const { categories, status: categoriesStatus } = useCategories();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [displayImage, setDisplayImage] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  if (status === "loading" || categoriesStatus === "loading") {
    return <Loader />;
  }

  if (!session) {
    return null;
  }

  const handleUpload = async () => {
    const newItem = {
      name,
      description,
      price,
      images,
      displayImage,
      seller: session.user.id,
      category,
    };

    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/items/${data._id}`);
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Network error: ${error.message}`);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto p-6 min-h-[66vh]">
        <h1 className="text-3xl font-semibold mb-6 text-center text-custom-orange">
          New Product
        </h1>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <TextInput
              id="name"
              placeholder="Item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Textarea
              id="description"
              placeholder="Item description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextInput
              id="price"
              placeholder="Item price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextInput
              id="displayImage"
              placeholder="Display image URL"
              value={displayImage}
              onChange={(e) => setDisplayImage(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextInput
              id="images"
              placeholder="Image URLs (comma separated)"
              value={images.join(", ")}
              onChange={(e) =>
                setImages(e.target.value.split(",").map((img) => img.trim()))
              }
            />
          </div>
          <div className="mb-4">
            <Select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </Select>
          </div>
          <Button
            onClick={handleUpload}
            className="w-full bg-blue-800 hover:bg-blue-900 text-white"
          >
            Upload Item
          </Button>
          {message && (
            <div className="mt-4 text-center text-red-500">{message}</div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default SellerProfile;
