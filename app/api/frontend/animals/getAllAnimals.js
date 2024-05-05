import axios from "axios";

export async function getAllAnimals() {
  try {
    // Make a GET request to fetch all categories
    const response = await axios.get(
      "http://localhost:3001/api/backend/animals"
    );

    // Extract the categories from the response data
    const animals = response.data.animals;

    // Return the fetched animals
    return animals;
  } catch (error) {
    // Handle errors if any
    console.error("Error fetching animals:", error);
  }
}
