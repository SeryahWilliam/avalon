import connectToDatabase from "@/app/lib/mongodb";
import Category from "@/app/models/Category";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectToDatabase();

  try {
    const categories = await Category.find({});
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching categories", error: error.message },
      { status: 500 }
    );
  }
}
