"use client";
import { useEffect, useState } from "react";
import BlogPostCard from "./BlogPostCard";
import { getBlogs, getCategoryInfo } from "@/utils/api";
import PageLoader from "./PageLoader";
import Nodata from "./Nodata";

interface BlogListProps {
  filter?: string;
}

export default function BlogList({ filter = "" }: BlogListProps) {
  const [blogs, setBlogs] = useState<any>([]);
  const [filterText, setFilterText] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getBlogsList = async () => {
    try {
      setIsLoading(true);
      let data = await getBlogs(currentPage, filter);
      if (filter) {
        let filterParts = filter.split("=");
        setTypeFilter(filterParts[0]);
        if (filterParts[0] === "category") {
          let info = await getCategoryInfo(filterParts[1]);
          setFilterText(info.name);
        } else if (filterParts[0] === "search") {
          setFilterText(filterParts[1]);
        }
      }
      console.log(data);
      setBlogs(data.blogs);
      setTotalPages(data?.totalPages || 1);
    } catch (error) {
      console.error("BlogList", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogsList();
  }, [filter, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getPaginationButtons = () => {
    const buttons = [];
    const maxButtons = 5; // Max number of pagination buttons to show
    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxButtons - 1);

    // Adjust startPage if endPage is less than maxButtons
    let adjustedStartPage = startPage;
    let adjustedEndPage = endPage;

    if (adjustedEndPage - adjustedStartPage < maxButtons - 1) {
      const difference = maxButtons - (adjustedEndPage - adjustedStartPage + 1);
      if (adjustedStartPage === 1) {
        // Adjust endPage when at the start
        adjustedEndPage = Math.min(totalPages, adjustedEndPage + difference);
      } else {
        // Adjust startPage when at the end
        adjustedStartPage = Math.max(1, adjustedStartPage - difference);
      }
    }

    for (let i = adjustedStartPage; i <= adjustedEndPage; i++) {
      buttons.push(
        <li
          key={i}
          className={`btn ${currentPage === i ? "active-pagination-dots" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return buttons;
  };

  return (
    <div
      className="w-full m-0 pr-4 flex justify-between flex-col"
      style={{
        minHeight: "95%",
      }}
    >
      <div>
        <div className="mb-2">
          {filter?.length > 0 && (
            <a href="/">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                <i className=" fa-solid ri-home-line"></i>
              </button>
            </a>
          )}
          {typeFilter?.length > 0 && (
            <button
              disabled
              className="mx-1 bg-transparen font-semibold  py-2 text-blue-700 px-4 border border-blue-500 rounded"
            >
              {typeFilter}
            </button>
          )}
          {filterText?.length > 0 && (
            <button
              disabled
              className="mx-1 bg-transparen font-semibold  py-2 text-blue-700 px-4 border border-blue-500 rounded"
            >
              {filterText}
            </button>
          )}
          {typeFilter === "search" && (
            <a href="/">
              <button
                disabled
                className="mx-1 bg-transparen font-semibold  py-2 text-red-500 px-4 border border-red-500 rounded"
              >
                <i className="ri-close-line"></i>
              </button>
            </a>
          )}
        </div>

        {isLoading && <PageLoader />}

        {!isLoading && !blogs.length && <Nodata />}

        {!isLoading &&
          blogs.map((post: any, index: number) => (
            <BlogPostCard
              key={index}
              href={"/" + post?.meta?.canonical}
              title={post.title}
              excerpt={post.excerpt}
              user={post.user}
              imageSrc={post.image}
              category={post.category}
            />
          ))}
      </div>

      {totalPages > 1 && blogs.length > 0 && (
        <div className="pagination">
          <ul>
            <li
              className={`btn btn-light ${currentPage === 1 ? 'disabled' : ''}`}
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            >
              Previous
            </li>
            {getPaginationButtons()}
            <li
              className={`btn btn-light ${currentPage === totalPages ? 'disabled' : ''}`}
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
            >
              Next
            </li>
          </ul>
        </div>
      )}

    </div>
  );
}
