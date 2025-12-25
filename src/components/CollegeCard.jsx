import  {} from './CollegeCard.css';
import Star from './Star';
const CollegeCard = ({ college }) => {
  return (
    <div className="group relative w-full max-w-md mx-auto overflow-hidden rounded-2xl">
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          transition-all duration-500
          group-hover:scale-110
        "
        style={{
          backgroundImage: `url(${college.image})`,
        }}
      ></div>

      <div className="
        absolute inset-0
        bg-black/30
        transition-all duration-300
        group-hover:bg-black/60
      "></div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none"></div>

      <div className="
        relative
        z-10
        p-8
        h-full
        flex
        flex-col
        justify-between
        transition-all
        duration-300
        text-white
        opacity-80
        group-hover:opacity-100
        group-hover:-translate-y-2
      ">

        <div className="absolute top-5 right-5">
          <i className="
            fa-solid fa-heart
            text-white/70
            cursor-pointer
            transition-all
            duration-300
            hover:text-red-500
            hover:scale-125
          "></i>
        </div>

        <h2 className="text-2xl font-semibold text-center mt-4 drop-shadow">
          {college.name}
        </h2>

        <div className="flex justify-center items-center mt-6 mb-10">
          <p className="flex items-center gap-2 text-white/90">
            <i className="fa-solid fa-location-dot text-red-400"></i>
            <span>{college.city}</span>
          </p>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-white/20">

          <div className="flex items-center gap-2 text-yellow-400 font-semibold">
            <Star rating={college.rating} />
          </div>

          <div className="flex items-center gap-1 text-white-400 font-semibold">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <span>{college.fees.toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CollegeCard;
