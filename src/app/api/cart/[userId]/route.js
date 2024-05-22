import { NextResponse } from "next/server";
import connectToDatabase from "@/app/lib/mongodb";
import Cart from "@/app/models/Cart";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req, { params }) {
  await connectToDatabase();

  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = params.userId;

  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.item");
    if (!cart) {
      return NextResponse.json({ error: "Cart not found" }, { status: 404 });
    }
    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching cart data" },
      { status: 500 }
    );
  }
}

export async function POST(req, { params }) {
  await connectToDatabase();

  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = params.userId;
  const { items } = await req.json();

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({ user: userId, items });
    } else {
      cart.items = items;
    }

    await cart.save();
    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating cart data" },
      { status: 500 }
    );
  }
}
