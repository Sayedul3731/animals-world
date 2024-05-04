"use client";
import axios from "axios";
import { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  // State to store the category name
  const [categoryName, setCategoryName] = useState("");

  // Function to handle input change
  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(categoryName);
    try {
      // Make a POST request to your backend API
      const response = await axios.post(
        "http://localhost:3000/api/backend/category",
        {
          name: categoryName, // Send the category name in the request body
        }
      );

      console.log("Category created:", response.data);
      // Close the modal
      onClose();
    } catch (error) {
      console.error("Error creating category:", error);
      // Handle error, e.g., display an error message to the user
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        textAlign: "start",
        justifyContent: "center",
        backgroundColor: "rgba(128, 128, 128, 0.75)",
      }}
    >
      <div
        className="bg-white p-6 rounded-lg "
        style={{
          color: "black",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2
          className="text-xl font-bold mb-4"
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "10px" }}
        >
          Add Category
        </h2>
        {/* Form for adding a category */}
        <form onSubmit={handleSubmit}>
          {/* Category name input field */}
          <div className="mb-4">
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              placeholder="Name"
              value={categoryName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingTop: "10px",
                paddingBottom: "10px",
                backgroundColor: "#F2F2F2",
                color: "black",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
          </div>
          {/* Save button */}
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg w-full"
            style={{ borderRadius: "10px" }}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
