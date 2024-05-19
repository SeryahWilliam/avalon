import connectToDatabase from "@/app/lib/mongodb";
import Cart from "@/app/models/Cart";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await connectToDatabase();

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = session.user.id;

  if (req.method === "GET") {
    try {
      const cart = await Cart.findOne({ user: userId }).populate("items.item");
      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: "Error fetching cart data" });
    }
  } else if (req.method === "POST") {
    try {
      const { items } = req.body;
      let cart = await Cart.findOne({ user: userId });

      if (!cart) {
        cart = new Cart({ user: userId, items });
      } else {
        cart.items = items;
      }

      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json({ message: "Error updating cart data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
