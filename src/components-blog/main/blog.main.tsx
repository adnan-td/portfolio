import Link from "next/link";
import BlogCard from "../card/card.blog";

export const query = `
  {
    "posts": *[_type == "post"] {
      description,
      publishedAt,
      title,
      slug,
      mainImage,
      author->,
      categories[]->,
      _createdAt,
    } | order(_createdAt desc)
  }
`;

export default function BlogMain({ data }: { data: any }) {
  return (
    <div className="w-screen flex justify-center px-7 sm:px-4 pb-14 sm:pb-7 bg-gray-50 min-h-screen">
      <div className="w-full max-w-[1200px] flex justify-center flex-col gap-6 pt-16">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            DevDive: Blogs
          </h1>
          <p className="mt-2 text-sm font-semibold text-gray-400">
            Tech Tips, Tutorials & How-to Guides by{" "}
            <Link className="text-indigo-500 underline" href="/">
              Adnan S. Husain
            </Link>{" "}
            since 2004
          </p>
        </header>
        <div className="w-full grid grid-cols-3 justify-items-center items-stretch gap-6 pt-5 pb-28 lg:grid-cols-2 sm:grid-cols-1 md:items-center">
          {data?.posts &&
            data.posts.map((post: Post, i: number) => {
              return <BlogCard key={i} post={post} />;
            })}
        </div>
      </div>
    </div>
  );
}

// *[ _type == "post" ] {
//   "headings": body[length(style) == 2 && string::startsWith(style, "h")]
// }
