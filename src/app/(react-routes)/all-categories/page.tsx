"use client";
import { sluggify } from "@/helpers/common.helper";
import React, { useEffect, useState } from "react";
import { getCategories } from "@/utils/api";
import PageLoader from "@/components/PageLoader";

export default function () {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategoriesList = async () => {
    try {
      setIsLoading(true);
      let list = await getCategories(400);
      setCategories(list);
    } catch (error) {
      console.error("getCategories", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl p-6">
        <span className="block">All Categories</span>
      </h1>
      {isLoading && <PageLoader />}
      <div className="px-6">
        {!isLoading &&
          categories &&
          categories.map((category: any) => (
            <button
              className="my-2 mx-1 rounded-full border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <a href={`/category/${sluggify(category.name)}`}>
                {category.name}
              </a>
            </button>
          ))}
      </div>
    </div>
  );
}
