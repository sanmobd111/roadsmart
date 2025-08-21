"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Searchbar({ placeholder, EclassName }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute  left-1/5 md:left-1/3 text-[#CA2026] top-1/2 transform -translate-y-1/2 h-4 md:h-6 w-5" />
          <Input
            type="text"
            placeholder={`${placeholder ? placeholder : "Search..."}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`pl-10 pr-10 h-10 md:h-[56px] text-center md:rounded-[14px] focus:shadow-none focus:ring-0 focus:outline-0 focus-visible:ring-[1px] focus-visible:border-[1px] focus-visible:ring-[#CA2026] `}
          />
          {searchQuery && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
