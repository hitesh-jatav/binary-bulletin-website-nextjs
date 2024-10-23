"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use this for client-side navigation

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter(); // Get the router instance

  const handleSearch = () => {
    if (search.trim() !== "") {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search when Enter is pressed
    }
  };

  return (
    <div className="relative mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update search state
        onKeyDown={handleKeyDown} // Listen for Enter key press
        placeholder="Search..."
        className="text-black px-1 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-300 w-full"
      />
      <button
        className="absolute right-0 top-0 mt-2 mr-2"
        onClick={handleSearch} // Trigger search on button click
      >
        <i className="ri-search-line"></i>
      </button>
    </div>
  );
}
