"use client"; // Enable client-side interactivity
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-2 border rounded-full"
    >
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 bg-transparent rounded-md outline-none"
      />
      <button type="submit" className="px-2">
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
