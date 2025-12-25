const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white rounded-xl p-10 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 overflow-hidden h-full flex flex-col justify-between relative min-h-[150px] w-full max-w-md mx-auto">
      
      <div className="absolute top-6 right-6">
        <i className="fa-solid fa-heart text-gray-300 hover:text-red-500 cursor-pointer transition-colors text-lg"></i>
      </div>

      <div className="flex justify-center items-start mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          {college.name}
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center mb-8">
        <p className="text-base text-gray-600 flex items-center gap-2 px-4 text-center">
          <i className="fa-solid fa-location-dot text-red-500 flex-shrink-0"></i>
          <span>{college.city}</span>
        </p>
      </div>

      <div className="flex justify-center items-center pt-4 border-t border-gray-100">
        <span className="text-yellow-500 font-semibold flex items-center gap-1 pr-12">
          <i className="fa-solid fa-star flex-shrink-0"></i>
          <span>{college.rating}</span>
        </span>

        <span className="text-green-600 font-semibold flex items-center gap-1 pl-12">
          <i className="fa-solid fa-indian-rupee-sign flex-shrink-0"></i>
          <span>{college.fees.toLocaleString()}</span>
        </span>
      </div>
    </div>
  );
};

export default CollegeCard;
