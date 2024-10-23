import Link from "next/link";

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  category,
  imageUrl,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg blog-card mt-2">
      <div
        className="bg-cover bg-center h-48 w-full absolute background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="p-4 bottom-0 absolute">
        <div className="mb-2">
          <Link
            href={`/categories/${category}`}
            className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-semibold"
          >
            {category}
          </Link>
        </div>
        <h3 className="text-white text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-300 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
