"use client";
import axios from "axios";
import { useState } from "react";

const Modal = ({ title, isOpen, setIsModalOpen }) => {
  // State to store the category name
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Function to handle input change
  const handleChange = (e) => {
    if (e.target.name === "categoryName") {
      setCategoryName(e.target.value);
    } else if (e.target.name === "imageUrl") {
      // Handle image URL change
      setImageUrl(e.target.value);
    }
  };

  const onClose = () => {
    setIsModalOpen(false);
  };
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title === "add category") {
        const res = await axios.post(
          "http://localhost:3001/api/backend/category",
          {
            name: categoryName, // Send the category name in the request body
          }
        );
      } else {
        const res = await axios.post(
          "http://localhost:3001/api/backend/animals",
          {
            name: categoryName,
            image: imageUrl,
          }
        );
      }
      onClose();
    } catch (error) {
      console.error("Error creating category:", error);
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
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "10px",
            textTransform: "capitalize",
          }}
        >
          {title}
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
            {title === "add animal" && (
              <input
                type="text"
                name="imageUrl"
                value={imageUrl}
                onChange={handleChange}
                placeholder="Image URL"
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
                  width: "full",
                }}
              />
            )}
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
