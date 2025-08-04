"use client";
import React from "react";
import { useState } from "react";

const FilterBar = () => {

  // These states may need to be held at the parent level on the main page - not sure how the fetch function will work yet
  const [category, setCategory] = useState(""); // Product category filter
  const [priceMode, setPriceMode] = useState(""); // Sets price mode to either under or over a certain dollar amount
  const [price, setPrice] = useState(0); // Sets the price level the user wants to query for
  const [query, setQuery] = useState(""); // Allows user to input a search term

  return (
    <div className="flex bg-gray-300 text-gray-900 my-10 justify-around rounded p-2">
      <div>
        <h1>Search Term</h1>
        <input
          value={query}
          placeholder="What are you looking for?"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {/* Category will need to be a dropdown, Maybe redix has one? */}
      <div>
        <h1>Category</h1>
        <input
          value={category}
          placeholder="Select a Category"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <h1>Price</h1>
        <input
          value={price}
          placeholder="What are you looking for?"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      {/* Need to add toggle button for under or over pricing mode */}
      
      <button>
        Search
      </button>
    </div>
  );
};

export default FilterBar;
