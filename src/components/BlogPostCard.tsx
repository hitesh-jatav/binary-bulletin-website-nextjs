import React from "react";
import Image from "next/image";
import { formatDate } from "@/utils/moment";

type BlogPostCardProps = {
  href: string;
  category?: string[];
  title: string;
  excerpt: string;
  user: { name: string; avatar: string; date: string };
  imageSrc: string;
  publishedDate?: string;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  href,
  category,
  title,
  excerpt,
  user,
  imageSrc,
  publishedDate
}) => {

  return (
    <a
      href={href}
      className="block mb-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-0 mt-2"
      style={{
        height: '200px',
        overflow: 'hidden'
      }}
    >
      <article className="overflow-hidden  m-0">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-1/3 h-64 sm:h-auto p-2" style={{
            height: '200px'
          }}>
            <Image
              className="rounded-lg object-cover"
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/path/to/low-quality-image.jpg"
            />
          </div>

          <div className="flex-1 px-2">

            {/* <span className="uppercase tracking-wide inline-block px-2 rounded-full text-xs bg-gray-300 text-gray-600 p-1">
              {category}
            </span> */}
            <h4 className="text-lg capitalize font-semibold text-gray-800 mt-2">
              {title}
            </h4>
            <div className="flex items-center mt-3">
              <div className="text-sm text-gray-600">
                Published:{" "}
                <time>{formatDate(publishedDate || '')}</time>
              </div>
            </div>
            <p className="text-gray-700 mt-2">{excerpt}</p>

          </div>
        </div>
      </article>
    </a>
  );
};

export default BlogPostCard;
