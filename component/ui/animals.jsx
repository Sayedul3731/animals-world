import Image from "next/image";
import React from "react";

const AnimalsPage = ({ allAnimals, birdAnimals, fishAnimals, insectAnimals }) => {
  return (
    <div className="text-white mt-10" style={{ marginTop: "50px" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "20px"
        }}
      >
        {birdAnimals?.length > 0 ? (
          birdAnimals?.map((animal, i) => (
            <div key={i} style={{ maxHeight: "400px" }}>
              <div className="w-[300px]" style={{ minHeight: "200px" }}>
                <Image
                  width={700}
                  height={300}
                  src={animal.image}
                  alt="animal image"
                  className="w-full"
                ></Image>
              </div>
            </div>
          ))
        ) : fishAnimals?.length > 0 ? (
          fishAnimals?.map((animal, i) => (
            <div key={i} style={{ maxHeight: "400px" }}>
              <div className="w-[300px]" style={{ minHeight: "200px" }}>
                <Image
                  width={700}
                  height={300}
                  src={animal.image}
                  alt="animal image"
                  className="w-full"
                ></Image>
              </div>
            </div>
          ))
        ) : insectAnimals?.length > 0 ? (
          insectAnimals?.map((animal, i) => (
            <div key={i} style={{ maxHeight: "400px" }}>
              <div className="w-[300px]" style={{ minHeight: "200px" }}>
                <Image
                  width={700}
                  height={300}
                  src={animal.image}
                  alt="animal image"
                  className="w-full"
                ></Image>
              </div>
            </div>
          ))
        ) : allAnimals?.length > 0 ? (
          allAnimals?.map((animal, i) => (
            <div key={i} style={{ maxHeight: "400px" }}>
              <div className="w-[300px]" style={{ minHeight: "200px" }}>
                <Image
                  width={700}
                  height={300}
                  src={animal.image}
                  alt="animal image"
                  className="w-full"
                ></Image>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default AnimalsPage;
