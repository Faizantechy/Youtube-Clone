import React from 'react';

const Searchbar = () => {
  return (
    <div className="">
      <div className="searchbar lg:ml-0 ml-5 w-[250px] sm:w-[250px] md:w-[300px] lg:w-[400px] rounded-lg lg:px-2 lg:py-1 bg-gray-100">
        <input
          type="text"
          className="w-[92%] bg-transparent px-2 border-none outline-none"
          placeholder="Search..."
        />
        <i className="ri-search-2-line lg:text-center lg:ml-2 text-black"></i>
      </div>
    </div>
  );
};

export default Searchbar;
