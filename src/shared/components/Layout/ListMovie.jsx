import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../../../context/MovieProvider";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ListMovie = ({ title, data }) => {
  const { handlerTrailer } = useContext(MovieContext);
  return (
    <div className=" text-white p-10 mb-15">
      <h2 className=" text-xl mb-4 uppercase ">{title}</h2>
      <Carousel className="flex items-center space-x-5" responsive={responsive}>
        {data &&
          data.length > 0 &&
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
      </Carousel>
    </div>
  );
};
export default ListMovie;
