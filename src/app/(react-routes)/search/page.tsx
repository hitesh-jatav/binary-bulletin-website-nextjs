"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from "next/navigation";
import BlogList from "@/components/BlogList";

const SearchResultsWrapper = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q");

  return (
    <BlogList filter={`search=${searchQuery}`} />
  );
};

export default function SearchResults() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResultsWrapper />
    </Suspense>
  );
}
