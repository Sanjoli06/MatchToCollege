import { useState } from "react";
import CollegeCard from "./components/CollegeCard";
import { colleges as collegeData } from "./data/colleges";

function App() {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filter first
  let filteredColleges = collegeData.filter(college =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort only if option selected
  if (sortOption === "asc") {
    filteredColleges = [...filteredColleges].sort(
      (a, b) => a.fees - b.fees
    );
  } else if (sortOption === "desc") {
    filteredColleges = [...filteredColleges].sort(
      (a, b) => b.fees - a.fees
    );
  }

  return (
    <div className="min-h-screen px-6 py-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">
         College Finder
      </h1>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">

        {/* Search */}
        <input
          type="text"
          placeholder="Search college by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg text-black w-full md:w-80 focus:outline-none"
        />

        {/* Sort Dropdown */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 rounded-lg text-black w-full md:w-52 cursor-pointer focus:outline-none"
        >
          <option value="" disabled>
            Sort by Fees
          </option>
          <option value="asc">Fees: Low → High</option>
          <option value="desc">Fees: High → Low</option>
        </select>
      </div>

      {/* College Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredColleges.map(college => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
}

export default App;
