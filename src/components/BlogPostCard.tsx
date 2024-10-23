import React from "react";
import Image from "next/image";

type BlogPostCardProps = {
  href: string;
  category?: string[];
  title: string;
  excerpt: string;
  user: { name: string; avatar: string; date: string };
  imageSrc: string;
};

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  href,
  category,
  title,
  excerpt,
  user,
  imageSrc,
}) => {
  return (
    <a
      href={href}
      className="block mb-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <article className="overflow-hidden rounded-lg">
        <div className="flex flex-col sm:flex-row p-4">
          <div className="relative w-full sm:w-1/3 h-64 sm:h-auto">
            <Image
              className="rounded-lg object-cover"
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              placeholder="blur" // Enable blur effect
              blurDataURL="/path/to/low-quality-image.jpg"
            />
          </div>
          <div className="flex-1 p-4">
            {/* <span className="uppercase tracking-wide inline-block px-2 rounded-full text-xs bg-gray-300 text-gray-600 p-1">
              {category}
            </span> */}
            <h4 className="text-lg capitalize font-semibold text-gray-800 mt-2">
              {title}
            </h4>
            <p className="text-gray-700 mt-2">{excerpt}</p>
            <div className="flex items-center mt-3">
              <div className="text-sm text-gray-600">
                Published:
                {/* <time>{user.updatedAt}</time> */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
};

export default BlogPostCard;
