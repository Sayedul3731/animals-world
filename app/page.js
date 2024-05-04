"use client";
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black mt-[1px] text-white">
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="w-2/3 flex justify-center items-center gap-5">
          <button className="border rounded-3xl px-5 py-2 border-red-600 text-red-600">
            Land Animal
          </button>
          <button className="border rounded-3xl px-5 py-2 border-red-600 text-red-600">
            Bird
          </button>
          <button className="border rounded-3xl px-5 py-2 border-red-600 text-red-600">
            Fish
          </button>
          <button className="border rounded-3xl px-5 py-2 border-red-600 text-red-600">
            Insect
          </button>
        </div>
        <div className="w-1/3 flex justify-end gap-5">
          <button className="border rounded-3xl px-5 py-2">Add Animal</button>
          <button className="border rounded-3xl px-5 py-2">Add Category</button>
        </div>
      </div>
    </main>
  );
}
