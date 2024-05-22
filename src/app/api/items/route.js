import connectToDatabase from "@/app/lib/mongodb";
import Item from "@/app/models/Item";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectToDatabase();
  const search = req.nextUrl.searchParams.get("search");

  let query = {};
  if (search) {
    query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    };
  }

  try {
    const items = await Item.find(query);
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching items" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectToDatabase();

  try {
    const {
      name,
      description,
      price,
      images,
      displayImage,
      rating,
      seller,
      category,
    } = await req.json();

    const newItem = new Item({
      name,
      description,
      price,
      images,
      displayImage,
      rating,
      seller,
      category,
    });

    await newItem.save();

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating item", error: error.message },
      { status: 500 }
    );
  }
}
