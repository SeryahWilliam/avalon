import connectToDatabase from "@/app/lib/mongodb";
import Item from "@/app/models/Item";
import User from "@/app/models/User";
import Category from "@/app/models/Category";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectToDatabase();
  const { itemId } = params;

  try {
    const item = await Item.findById(itemId)
      .populate("seller")
      .populate("category");
    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }
    return NextResponse.json(item, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching item", error: error.message },
      { status: 500 }
    );
  }
}
