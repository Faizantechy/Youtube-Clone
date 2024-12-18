import React from "react";
import { categories } from "../utils/Data";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div
      className=" SideBar bg-black text-gray-200 lg:h-[110vh] lg:fixed lg:w-[15vw] lg:border-r-2 border-gray-400 px-2 flex lg:flex-col flex-row items-center lg:items-start overflow-x-auto w-full  fixed top-[3.5rem] z-10"
    >
      {/* Categories */}
      <ul className="flex lg:flex-col flex-row  space-x-4 lg:space-x-0 w-full justify-between">
        {categories.map((category) => (
          <li
            key={category.name}
            className={`flex items-center gap-2 text-[14px] lg:text-[18px] text-nowrap rounded-lg px-3 py-2 transition-all duration-300 ${
              selectedCategory === category.name
                ? "bg-[rgb(252,21,3)] text-[16px] lg:text-[19px] font-bold scale-[95%]"
                : "hover:bg-gray-700"
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <span className="font-bold">{category.icon}</span>
            {/* Always show category name */}
            <span className="text-[12px] lg:text-[16px]">{category.name}</span>
          </li>
        ))}
      </ul>

      {/* Footer (Copyright) */}
      <span className="font-bold text-gray-400 text-nowrap lg:mt-auto lg:mb-3 hidden lg:block">
        Copyright 2024
      </span>
    </div>
  );
};

export default Sidebar;
