"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/app/redux/slices/cartSlice";
import { saveCart } from "@/app/redux/actions/cartThunks";
import { useSession } from "next-auth/react";
import { Button, Carousel } from "flowbite-react";
import Loader from "@/app/components/Loader";
import CarouselComponent from "@/app/components/Carousel";

function ItemPage() {
  const router = useRouter();
  const { itemId } = useParams();
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (itemId) {
      const fetchItem = async () => {
        try {
          const response = await fetch(`/api/items/${itemId}`);
          if (response.ok) {
            const data = await response.json();
            setItem(data);
          } else {
            console.error("Failed to fetch item");
          }
        } catch (error) {
          console.error("Error fetching item:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchItem();
    }
  }, [itemId]);

  if (loading || status === "loading") {
    return <Loader />;
  }

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleAddToCart = () => {
    if (!session) {
      router.push("/auth/signin");
      return;
    }
    const itemToAdd = { item, quantity: 1 };
    dispatch(addItem(itemToAdd));
    dispatch(
      saveCart({
        userId: session.user.id,
        cart: { items: [...cartItems, itemToAdd] },
      })
    ).then(() => {
      router.push("/cart");
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Carousel className="h-80 md:h-[60vh]">
            {[item.displayImage, ...item.images].map((image, idx) => (
              <img
                src={image}
                key={idx}
                alt={`carousel-image-${idx}`}
                className="object-cover w-[30vw] h-full"
              />
            ))}
          </Carousel>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {item.name}
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-400">
            {item.description}
          </p>
          <div className="flex items-center mt-4 mb-6">
            <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cyan-200 dark:text-cyan-800">
              {item.rating ?? "0.0"}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${item.price}
            </span>
            <Button
              onClick={handleAddToCart}
              className="bg-cyan-700 text-white hover:bg-cyan-800"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
