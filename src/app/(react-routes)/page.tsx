import BlogList from "@/components/BlogList";
import type { Metadata } from "next";
import { blogUrl } from "@/data/server-data";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Binary Bulletin - Insights and Tutorials on Modern Technology",
    description:
      "Welcome to Binary Bulletins! Explore in-depth articles, tutorials, and insights on technology, programming, and software development.",
    keywords: [
      "technology",
      "programming",
      "software development",
      "tutorials",
      "tech insights",
    ],
    authors: [
      {
        name: "Binary Bulletin",
      },
    ],
    openGraph: {
      title: "Binary Bulletin - Insights and Tutorials on Modern Technology",
      description:
        "Welcome to Binary Bulletins! Explore in-depth articles, tutorials, and insights on technology, programming, and software development.",
      type: "website",
      url: blogUrl,
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": "-1",
      "max-image-preview": "large",
    },
    icons: [
      {
        url: "/logo.png", // 'url' instead of 'src'
        type: "image/png",
        sizes: "192x192", // Define icon size
      },
    ],
  };
}

export default async function Home() {
  return <BlogList />;
}
