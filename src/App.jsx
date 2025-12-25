import { useState } from "react";
import { colleges as collegeData } from "./data/colleges";

function App() {
  

  const filteredColleges = collegeData
    

  return (
    <div className="min-h-screen px-6 py-10">

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-8">
        🎓 College Finder
      </h1>

     <ul>
      {filteredColleges.map(college => (
        <li key={college.id}>
         {college.name} -- {college.city} | Rating: {college.rating} | Fees: ₹{college.fees}
        </li>
      ))}
     </ul>
    </div>
  );
}

export default App;
