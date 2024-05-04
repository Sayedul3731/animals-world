import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongoDB";
import Category from "../../../../lib/models/categoryModel";

export async function POST(req) {
  try {
    const { name } = await req.json();
    await connectToDatabase();
    const newCategory = new Category({
      name,
    });
    const result = await newCategory.save();
    return NextResponse.json(
      {
        result,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
      }
    );
  }
}
