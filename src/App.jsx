import { useState } from "react";
import CollegeCard from "./components/CollegeCard";
import { colleges as collegeData } from "./data/colleges";

function App() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  let filteredColleges = collegeData.filter((college) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sortOption === "asc") {
    filteredColleges = [...filteredColleges].sort((a, b) => a.fees - b.fees);
  } else if (sortOption === "desc") {
    filteredColleges = [...filteredColleges].sort((a, b) => b.fees - a.fees);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-1">
      <div className="max-w-7xl mx-auto p-1 max-h-[80px]">
        <h1 className="text-4xl font-bold flex items-center gap-4 text-gray-800 mb-12">
          <i className="fas fa-graduation-cap text-4xl text-[#01358B]"></i>
          College Finder
        </h1>
      </div>

      <div className="max-w-7xl mx-auto mb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-10 items-center gap-4">
          <div className="md:col-span-3">
            <div className="flex items-center h-14 rounded-xl border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
              <span className="w-14 flex items-center justify-center text-gray-400">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                placeholder="Search college..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-full pr-4 text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="hidden md:block md:col-span-5" />

          <div className="md:col-span-2">
            <div className="relative h-14 rounded-xl border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400">
                <i className="fa-solid fa-arrow-up-wide-short"></i>
              </span>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full h-full pl-12 pr-12 bg-transparent text-gray-800 focus:outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled selected hidden>
                  Sort by Fees
                </option>
                <option value="asc">Low → High</option>
                <option value="desc">High → Low</option>
              </select>

              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <i className="fa-solid fa-chevron-down text-sm"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {filteredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No college found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;