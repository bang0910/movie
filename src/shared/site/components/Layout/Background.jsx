import { Link } from "react-router-dom";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-blue-500 -z-10 flex justify-center items-center overflow-hidden">
      <section className="wrapper relative">
        <h1 className="text-[30px] uppercase font-bold text-white absolute top-[1px] left-5">
          <Link to={"/home"}>movie</Link>
        </h1>
        {[...Array(10)].map((_, i) => (
          <div key={i} className="absolute animate-ping">
            <span className="dot"></span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Background;
