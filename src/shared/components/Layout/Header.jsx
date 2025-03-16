import PropType from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState([]);
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700 ">
          <Link to={"/"}>MovieZone</Link>
        </h1>
      </div>
      <div className="flex text-xl items-center text-white space-x-8">
        <h2>
          <Link className=" hover:text-red-500" to="/">
            Home
          </Link>
        </h2>
        <h2>
          <Link className=" hover:text-red-500" to={"/"}>
            Phim Hot
          </Link>
        </h2>
        <h2>
          <Link className=" hover:text-red-500" to={"/"}>
            Phim Nổi Bật
          </Link>
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <input
          onChange={(e) => setTextSearch(e.target.value)}
          value={textSearch}
          type="text"
          placeholder="Search"
          className=" p-2 text-black rounded-md ring-1 ring-inset ring-red-400"
        />
        <button
          onClick={() => onSearch(textSearch)}
          className="p-[6px] text-white rounded-md bg-red-500 hover:bg-red-700"
        >
          Search
        </button>
      </div>
      <div className="flex justify-start item-center space-x-1">
        <button className="text-[15px] text-white hover:text-teal-400 hover:scale-105">
          <Link to={"/login"}>Đăng nhập</Link>
        </button>
        <h3 className="text-[20px] text-white">/</h3>
        <button className="text-[15px] text-white hover:text-teal-400 hover:scale-105">
          <Link to={"/register"}>Đăng kí</Link>
        </button>
      </div>
    </div>
  );
};
Header.PropType = {
  onSearch: PropType.func,
};
export default Header;
