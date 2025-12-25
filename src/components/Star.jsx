const Star = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        if (rating >= starValue) {
          return <i key={index} className="fa-solid fa-star" />;
        }
        if (rating > starValue - 1) {
          const fillPercentage = (rating - (starValue - 1)) * 100;
          return (
            <span
              key={index}
              className="relative inline-block w-4 h-4 overflow-hidden"
            >
              <i className="fa-regular fa-star absolute inset-0 text-gray-300" />

              <i
                className="fa-solid fa-star absolute inset-0"
                style={{ width: `${fillPercentage}%`, overflow: "hidden" }}
              />
            </span>
          );
        }
        return (
          <i key={index} className="fa-regular fa-star text-gray-300" />
        );
      })}

      <span className="ml-2 text-sm font-semibold text-white-700">
        {rating}
      </span>
    </div>
  );
};
export default Star;