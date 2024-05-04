import { NextResponse } from "next/server";
import connectToDatabase from "../../../../lib/mongoDB";
import User from "../../../../lib/models/userModel";

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    await connectToDatabase();
    const newUser = new User({
      name,
      email,
    });
    const result = await newUser.save();
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
