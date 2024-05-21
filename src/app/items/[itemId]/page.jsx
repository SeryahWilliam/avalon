"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/app/redux/slices/cartSlice";
import { saveCart } from "@/app/redux/actions/cartThunks";
import { useSession } from "next-auth/react";
import { Card, Button } from "flowbite-react";
import Loader from "@/app/components/Loader";

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
      <Card imgAlt={item.name} imgSrc={item.displayImage}>
        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-cyan-200 dark:text-cyan-800">
            {item.rating} / 5
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
      </Card>
    </div>
  );
}

export default ItemPage;
