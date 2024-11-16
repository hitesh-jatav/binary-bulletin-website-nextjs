import React from "react";
import type { Metadata } from "next";
import { getBlogInfo } from "@/utils/api";
import { blogUrl } from "@/data/server-data";
import { formatDate } from "@/utils/moment";
import { sluggify } from "@/helpers/common.helper";
import NotFoundPage from "@/components/PageNotFound";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = await getBlogInfo(params.slug);
  if (blog) {
    return {
      title: blog?.meta?.title || blog.title,
      description: blog?.meta?.desc,
      keywords: blog?.meta?.keywords || blog?.tags,
      authors: [
        {
          name: "Binary bulletin ",
        },
      ],
      openGraph: {
        title: (blog?.meta?.title || blog.title) + " | Binary bulletin",
        description: blog?.meta?.desc,
        type: "article",
        url: `${blogUrl + "/" + blog?.meta?.canonical}`,
        publishedTime: blog.createdAt,
        modifiedTime: blog.updatedAt,
        authors: [blogUrl + "/about"],
        tags: blog.tags,
      },

      alternates: {
        canonical: blogUrl + '/' + blog?.meta?.canonical,
      },
      robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-video-preview": "-1",
        "max-image-preview": "large",
      },
    };
  }

  return {
    title: "Blog not found",
    description: "The blog you are looking for could not be found.",
    robots: {
      index: false,
      follow: false,
    },
  };
}

interface BlogPageProps {
  params: { slug: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogInfo(params.slug);
  if (!blog) {
    return <NotFoundPage title="Blog not found!" />;
  }

  return (
    <div className="w-full mx-auto px-4 py-8 p-5 border bg-white">
      <div className="mb-4">
        <p className="text-gray-500">
          Published on: <strong>{formatDate(blog.publishedDate)}</strong>
        </p>
      </div>
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-lg text-gray-800 mb-4">{blog.excerpt}</p>
      {blog.categories?.map((bg: { _id: string; name: string }) => (
        <a href={`/category/${sluggify(bg.name)}`} key={bg._id}>
          <span className="mr-2 uppercase tracking-wide inline-block px-2 rounded-full text-xs bg-gray-300 text-gray-600 p-3 py-2 mb-4">
            {bg.name}
          </span>
        </a>
      ))}
      {blog?.image && (
        <div className="mb-6">
          <img
            src={blog?.image}
            alt={blog.title}
            className="object-cover"
            style={{ width: "1200px", height: "630px" }}
          />
        </div>
      )}

      <div className="mt-8">
        <div
          dangerouslySetInnerHTML={{ __html: blog?.content || "<div></div>" }}
        ></div>
      </div>

      <div className="flex items-center mt-8">
        {/* <img
          src={blog.user.avatar}
          alt={blog.user.name}
          className="w-10 h-10 rounded-full mr-2"
        /> */}
        <div className="flex">
          <p className="text-gray-500">
            Author:<span className="text-sm font-semibold px-2">Admin</span>
          </p>
        </div>
      </div>
    </div>
  );
}
