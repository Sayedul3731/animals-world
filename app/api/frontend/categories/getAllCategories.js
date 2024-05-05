import axios from "axios";

export async function getAllCategories() {
  try {
    // Make a GET request to fetch all categories
    const response = await axios.get(
      "http://localhost:3001/api/backend/category"
    );

    // Extract the categories from the response data
    const categories = response.data.categories;

    // Return the fetched categories
    return categories;
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching categories:", error);
  }
}
