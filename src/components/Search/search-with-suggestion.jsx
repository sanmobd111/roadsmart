"use client";

// import type React from "react"

import { useState, useRef, useEffect } from "react";
import { Search, X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Mock data for suggestions
const mockSuggestions = [
  "React components",
  "Next.js tutorial",
  "TypeScript guide",
  "JavaScript functions",
  "CSS animations",
  "HTML semantics",
  "Web accessibility",
  "API integration",
  "Database design",
  "User interface",
  "User experience",
  "Mobile responsive",
  "Performance optimization",
  "SEO best practices",
  "Testing strategies",
];

const recentSearches = ["React hooks", "CSS Grid", "API endpoints"];

// interface SearchWithSuggestionsProps {
//   onSearch?: (query: string) => void
//   placeholder?: string
// }

export default function SearchWithSuggestions({
  onSearch,
  placeholder = "Search...",
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearchList, setRecentSearchList] = useState(recentSearches);

  const inputRef = useRef(null);
  const suggestionRefs = useRef([]);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions(recentSearchList);
    } else {
      const filtered = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 8)); // Limit to 8 suggestions
    }
    setSelectedIndex(-1);
  }, [searchQuery, recentSearchList]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    handleSearch(suggestion);
  };

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      // Add to recent searches if not already there
      if (!recentSearchList.includes(query)) {
        setRecentSearchList((prev) => [query, ...prev.slice(0, 4)]); // Keep only 5 recent searches
      }
      onSearch?.(query);
      console.log("Searching for:", query);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex >= 0 && suggestions[selectedIndex]) {
      handleSearch(suggestions[selectedIndex]);
    } else {
      handleSearch();
    }
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          handleSubmit(e);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Scroll selected suggestion into view
  useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  const clearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-md mx-auto relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-10"
            autoComplete="off"
            role="combobox"
            aria-expanded={showSuggestions}
            aria-haspopup="listbox"
            aria-autocomplete="list"
          />

          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="pl-10 pr-10"
            autoComplete="off"
            role="combobox"
            aria-expanded={showSuggestions}
            aria-haspopup="listbox"
            aria-autocomplete="list"
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

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
          <ul role="listbox" className="py-1">
            {searchQuery.trim() === "" && (
              <li className="px-3 py-2 text-xs font-medium text-muted-foreground border-b">
                Recent searches
              </li>
            )}
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                ref={(el) => (suggestionRefs.current[index] = el)}
                role="option"
                aria-selected={selectedIndex === index}
                className={`px-3 py-2 cursor-pointer flex items-center gap-2 hover:bg-muted ${
                  selectedIndex === index ? "bg-muted" : ""
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {searchQuery.trim() === "" ? (
                  <Clock className="h-3 w-3 text-muted-foreground" />
                ) : (
                  <Search className="h-3 w-3 text-muted-foreground" />
                )}
                <span className="text-sm">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
