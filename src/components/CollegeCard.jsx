const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg
                    hover:scale-105 transition-transform duration-300
                    border border-white/20">

      <h2 className="text-xl font-semibold text-cyan-300">
        {college.name}
      </h2>

      <p className="text-sm text-gray-300 mt-1">
         {college.city}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-yellow-400 font-medium">
           {college.rating}
        </span>

        <span className="text-green-400 font-semibold">
           {college.fees.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default CollegeCard;
