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
    <div className="min-h-screen bg-gray-50 p-1">
      {/* Header - Left aligned */}
      <div className="max-w-7xl p-1 max-h-18">
        <h1 className="text-4xl font-bold flex items-center gap-4 text-gray-800 mb-16">
          <i className="fas fa-graduation-cap text-4xl text-[#01358B]"></i>
          College Finder
        </h1>
      </div>

      {/* Controls - Centered container with balanced layout */}
      {/* 
      {/* College Grid */}
      <div className="max-w-5xl mx-auto mb-16 max-h-24">
        <div className="flex flex-wrap md:flex-nowrap items-stretch gap-4 md:gap-6">
          {/* Search Input - 80% */}
          <div className="w-full md:w-[80%] max-h-[80px]">
            <div className="flex items-center border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
              <span className="w-14 flex items-center justify-center text-gray-500">
                <i className="fa-solid fa-magnifying-glass text-lg"></i>
              </span>
              <input
                type="text"
                placeholder="Search college by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full py-4 pr-4 pl-2 text-gray-800 focus:outline-none text-base"
              />
            </div>
          </div>

          {/* Sort Dropdown - 20% aligned right */}
          {/* <div className="w-full md:w-[20%] md:ml-auto sm:mt-0 max-h-[95px] md:max-h-16 sm:max-h-36"> */}
          <div className="w-full md:w-[20%] md:ml-auto max-h-[95px] 60 sm:max-h- md:max-h-16 sm:mt-0">
            <div className="relative flex items-center border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 bg-white">
              <span className="w-14 flex items-center justify-center text-gray-500">
                <i className="fa-solid fa-sort text-lg"></i>
              </span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full py-4 pr-10 pl-2 text-gray-800 bg-transparent focus:outline-none cursor-pointer appearance-none text-base"
              >
                <option value="" disabled hidden>
                  Sort by Fees
                </option>
                <option value="asc">Fees: Low → High</option>
                <option value="desc">Fees: High → Low</option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {filteredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>

        {/* Empty state */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-5">
            <p className="text-xl text-gray-600">No college found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
