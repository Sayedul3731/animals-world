"use client";

import { useState } from "react";
import Modal from "../component/ui/modal";
import { getAllAnimals } from "./api/frontend/animals/getAllAnimals";
import axios from "axios";
import AnimalsPage from "../component/ui/animals";

export default function HomePage() {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [allAnimals, setAllAnimals] = useState([]);
  const [birdAnimals, setBirdAnimals] = useState([]);
  const [fishAnimals, setFishAnimals] = useState([]);
  const [insectAnimals, setInsectAnimals] = useState([]);

  const handleOpenModal = (title) => {
    setIsModalOpen(true);
    setModalTitle(title);
  };
  const fetchAnimals = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/backend/animals"
      );
      setFishAnimals([])
      setBirdAnimals([])
      setInsectAnimals([])
      setAllAnimals(response?.data?.animals);
    } catch (error) {
      console.error("Error fetching bird data:", error);
    }
  };
  const handleBirds = () => {
    const allBirdAnimals = allAnimals?.filter(animal => animal.name === "Bird");
    setBirdAnimals(allBirdAnimals)
    setFishAnimals([])
    setInsectAnimals([])
  }
  const handleFishes = () => {
    const allFishAnimals = allAnimals?.filter(animal => animal.name === "Fish");
    setFishAnimals(allFishAnimals)
    setBirdAnimals([])
    setInsectAnimals([])
  }
  const handleInsects = () => {
    const allInsectAnimals = allAnimals?.filter(animal => animal.name === "insect");
    setInsectAnimals(allInsectAnimals)
    setFishAnimals([])
    setBirdAnimals([])
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black mt-[1px] text-white">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="w-2/3 flex justify-center items-center gap-5">
          <button
            onClick={fetchAnimals}
            className="border rounded-3xl px-5 py-2 border-red-600 text-red-600"
          >
            Land Animal
          </button>
          <button onClick={handleBirds} className="border rounded-3xl px-5 py-2 border-red-600 text-red-600">
            Bird
          </button>
          <button onClick={handleFishes} className="border rounded-3xl px-5 py-2 border-red-600 text-red-600">
            Fish
          </button>
          <button onClick={handleInsects} className="border rounded-3xl px-5 py-2 border-red-600 text-red-600">
            Insect
          </button>
        </div>
        <div className="w-1/3 flex justify-end gap-5">
          <button
            className="border rounded-3xl px-5 py-2"
            onClick={() => handleOpenModal("add animal")}
          >
            Add Animal
          </button>
          <button
            onClick={() => handleOpenModal("add category")}
            className="border rounded-3xl px-5 py-2"
          >
            Add Category
          </button>
        </div>
      </div>
      <div>
        <AnimalsPage allAnimals={allAnimals} birdAnimals={birdAnimals} fishAnimals={fishAnimals} insectAnimals={insectAnimals} />
      </div>
      {/* Render the modal component */}
      <Modal
        title={modalTitle}
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </main>
  );
}
