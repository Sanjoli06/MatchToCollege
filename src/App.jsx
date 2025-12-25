import { useState } from "react";
import CollegeCard from "./components/CollegeCard";
import { colleges as collegeData } from "./data/colleges";

function App() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filter first
  let filteredColleges = collegeData.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort only if option selected
  if (sortOption === "asc") {
    filteredColleges = [...filteredColleges].sort((a, b) => a.fees - b.fees);
  } else if (sortOption === "desc") {
    filteredColleges = [...filteredColleges].sort((a, b) => b.fees - a.fees);
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-gray-800">
        <i className="fas fa-graduation-cap text-3xl text-blue-600"></i>
        College Finder
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-16 max-w-4xl mx-auto">
        {/* Search */}
        <div className="w-full md:w-80">
          <div className="flex items-center border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            {/* Icon area */}
            <span className="w-14 flex items-center justify-center text-gray-400">
              <i className="fa-solid fa-magnifying-glass text-sm"></i>
            </span>

            {/* Input */}
            <input
              type="text"
              placeholder="Search college by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 pr-4 pl-2 text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="w-full md:w-52">
          <div className="flex items-center border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
            {/* Left icon */}
            <span className="w-14 flex items-center justify-center text-gray-400">
              <i className="fa-solid fa-sort text-sm"></i>
            </span>

            {/* Select */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="w-full py-3 pr-10 text-gray-800 bg-transparent focus:outline-none cursor-pointer appearance-none"
            >
              {/* Placeholder (hidden in dropdown) */}
              <option value="" disabled hidden>
                Sort by Fees
              </option>

              <option value="asc">Fees: Low → High</option>
              <option value="desc">Fees: High → Low</option>
            </select>

            {/* Right arrow */}
            <span className="w-10 flex items-center justify-center text-gray-400 pointer-events-none">
              <i className="fa-solid fa-chevron-down text-sm"></i>
            </span>
          </div>
        </div>
      </div>

      {/* College Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12 place-items-center">
        {filteredColleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
}

export default App;
