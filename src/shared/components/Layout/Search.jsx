import PropType from "prop-types";
import { useContext } from "react";
import { MovieContext } from "../../../context/MovieProvider";
const Search = ({ title, data }) => {
  const { handlerTrailer } = useContext(MovieContext);

  return (
    <div className=" text-black p-10 mb-15">
      <h2 className=" text-xl mb-4 uppercase ">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => handlerTrailer(item.id)}
            >
              <div className="w-full overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-in-out ">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-5">
                  <p className="uppercase text-md ">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
Search.propTypes = {
  title: PropType.string,
  data: PropType.array,
};

export default Search;
