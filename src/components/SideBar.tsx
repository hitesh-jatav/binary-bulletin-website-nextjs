"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { sluggify } from "@/helpers/common.helper";
import { getCategories, recentBlogs } from "@/utils/api";
import SearchInput from "./SearchInput";

export default async function SideBar() {
  const pathname = usePathname();
  const [isRecentsOpen, setIsRecentsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const categories = await getCategories(11);
  const recents = await recentBlogs();
  const sectionStyle = "my-5 border-l-0 border border-r-0 py-2 border-t-0 pb-5";
  const titleStyle = "font-bold text-lg mb-2";
  const linkClass = "text-gray-700 mt-2 block hover:text-gray-900 my-1 text-lg";

  const toggleRecents = () => setIsRecentsOpen(!isRecentsOpen);
  const toggleCategories = () => setIsCategoriesOpen(!isCategoriesOpen);

  return (
    <div>
      <SearchInput />

      {/* Recents Section */}
      <div className={sectionStyle}>
        <h3 className={titleStyle} onClick={toggleRecents}>
          Recents
        </h3>
        <div className={`${isRecentsOpen ? "block" : "hidden"} md:block`}>
          {recents.map((elm: any) => {
            const href = `/${elm?.meta?.canonical}`;
            const isActive = pathname.endsWith(elm?.meta?.canonical);
            return (
              <a
                href={href}
                key={elm._id}
                className={`${linkClass} ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`}
                style={linkStyle}
              >
                {elm.title}
              </a>
            );
          })}
        </div>
      </div>

      {/* Categories Section */}
      <div className={sectionStyle}>
        <h3 className={titleStyle} onClick={toggleCategories}>
          Categories
        </h3>
        <div className={`${isCategoriesOpen ? "block" : "hidden"} md:block`}>
          {categories.map((elm: any) => {
            const slug = sluggify(elm.name);
            const href = `/category/${slug}`;
            const isActive = pathname.endsWith(`/category/${slug}`);
            return (
              <a
                href={href}
                key={elm._id}
                className={`${linkClass} ${
                  isActive ? "font-semibold text-blue-600" : ""
                }`}
                style={linkStyle}
              >
                {elm.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
