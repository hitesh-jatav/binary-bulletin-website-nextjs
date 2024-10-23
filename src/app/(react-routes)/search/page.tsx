"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getBlogs } from "@/utils/api";
import BlogList from "@/components/BlogList";

export default function SearchResults() {
  const searchParams = useSearchParams(); // Hook to get search params
  const searchQuery = searchParams.get("q"); // Get the 'q' parameter from the URL

  return <BlogList filter={`search=${searchQuery}`} />;
}
