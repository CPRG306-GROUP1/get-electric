"use client";
import React, { useState } from "react";

const FilterBar = ({ onSearch }) => {
  const [category, setCategory] = useState(""); 
  const [priceMode, setPriceMode] = useState("under"); 
  const [price, setPrice] = useState(0); 
  const [query, setQuery] = useState(""); 

  const handleSearch = () => {
    // Pass filters up to parent
    onSearch({ query, category, priceMode, price });
  };

  return (
    <div className="flex flex-wrap gap-4 bg-gray-300 text-gray-900 my-10 justify-around rounded p-4">
      
      {/* Search Term */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Search Term</label>
        <input
          value={query}
          placeholder="What are you looking for?"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      {/* Category Dropdown */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="Accessories">Accessories</option>
          <option value="Audio">Audio</option>
          <option value="Cameras">Cameras</option>
          <option value="Drones">Drones</option>
          <option value="Gaming">Gaming</option>
          <option value="Power">Power</option>
          <option value="Smart Home">Smart Home</option>
          <option value="Smartphones">Smart Phones</option>
          <option value="Tablets">Tablets</option>
          <option value="Wearables">Wearables</option>
        </select>
      </div>

      {/* Price Input */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Price</label>
        <input
          value={price}
          placeholder="Enter price"
          type="number"
          min="0"
          onChange={(e) => setPrice(Number(e.target.value))}
          className="p-2 border rounded"
        />
      </div>

      {/* Price Mode Toggle */}
      <div className="flex flex-col">
        <label className="font-semibold mb-1">Price Mode</label>
        <div className="flex gap-2 items-center">
          <label>
            <input
              type="radio"
              value="under"
              checked={priceMode === "under"}
              onChange={() => setPriceMode("under")}
              className="mr-1"
            />
            Under
          </label>
          <label>
            <input
              type="radio"
              value="over"
              checked={priceMode === "over"}
              onChange={() => setPriceMode("over")}
              className="mr-1"
            />
            Over
          </label>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex items-end">
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>

    </div>
  );
};

export default FilterBar;
