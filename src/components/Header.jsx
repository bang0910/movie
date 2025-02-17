import PropType from "prop-types";
import ListMovie from "./ListMovie";
import { useState } from "react";
const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState([]);
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700 ">
          <a href={<ListMovie />}>movie</a>
        </h1>
      </div>
      <div className="flex items-center text-white space-x-8">
        <h2>
          <a className=" hover:text-red-500" href="#">
            Home
          </a>
        </h2>
        <h2>
          <a className=" hover:text-red-500" href="#">
            About
          </a>
        </h2>
        <h2>
          <a className=" hover:text-red-500" href="#">
            Contact
          </a>
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
          <a href="#">Đăng nhập</a>
        </button>
        <h3 className="text-[20px] text-white">/</h3>
        <button className="text-[15px] text-white hover:text-teal-400 hover:scale-105">
          <a href="#">Đăng kí</a>
        </button>
      </div>
    </div>
  );
};
Header.PropType = {
  onSearch: PropType.func,
};
export default Header;
