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
