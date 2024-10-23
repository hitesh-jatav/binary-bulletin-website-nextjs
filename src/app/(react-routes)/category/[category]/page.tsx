import BlogList from "@/components/BlogList";

export default function Page({ params }: { params: { category: string } }) {
  return (
    <main className="">
      <BlogList filter={`category=${params.category}`} />
    </main>
  );
}
