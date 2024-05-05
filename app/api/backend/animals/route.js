import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongoDB";
import Animal from "../../../../lib/models/animalsModel";

export async function POST(req) {
  try {
    const { name, image } = await req.json();
    await connectToDatabase();
    const newAnimal = new Animal({
      name,
      image,
    });
    const result = await newAnimal.save();
    return NextResponse.json(
      {
        message: "Animal Created Successfully",
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
export async function GET() {
  try {
    await connectToDatabase();
    const animals = await Animal.find();
    return NextResponse.json(
      { message: "Animals Get Successfully", animals },
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
