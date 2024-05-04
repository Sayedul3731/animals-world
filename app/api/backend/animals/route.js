import connectToDatabase from "../../../../lib/index/connectToDatabase";

async function handler(req, res) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("animals");

    // Perform MongoDB operations (e.g., insertOne, find, updateOne, deleteOne)

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "An error occurred" });
  }
}

export default handler;
