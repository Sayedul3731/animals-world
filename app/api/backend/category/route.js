import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongoDB";
import Category from "../../../../lib/models/categoriesModel";

export async function POST(req) {
  try {
    const { name } = await req.json();
    await connectToDatabase();
    const newCategory = new Category({
      name,
    });
    const result = await newCategory.save();
    return NextResponse.json(
      { message: "Category Created Successfully", result },
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
export async function GET() {
  try {
    await connectToDatabase();
    const categories = await Category.find({});
    return NextResponse.json(
      { message: "Category Get Successfully", categories },
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
