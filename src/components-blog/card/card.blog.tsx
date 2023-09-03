import CardImage from "./blog.image";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-col w-full drop-shadow-xl rounded-2xl overflow-hidden bg-white group">
      <div className="relative w-full h-72 z-[1]">
        <CardImage image={post.mainImage} title={post.title} />
      </div>
      <div className="mt-[-120px] bg-white p-4 z-[2] rounded-t-2xl flex flex-col gap-4">
        <time className="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <a href={`/blog/${post.slug.current}`} className="cursor-pointer flex flex-col gap-4 z-[2]">
          <p className="line-clamp-2 text-xl font-semibold leading-tight tracking-tight text-gray-700 hover:text-gray-900 sm:text-base md:text-lg">
            {post.title}
          </p>
          <p className="line-clamp-3 text-base text-gray-500 md:line-clamp-none">
            {post.description}
          </p>
        </a>
        <div className="flex items-center text-xs font-medium ">
          {post.categories.map((category: Category, i: number) => {
            return (
              <div
                key={i}
                className="mr-1.5 rounded-full px-3 py-1 bg-opacity-40"
                style={{
                  color: category.color.hex,
                  border: `1px solid ${category.color.hex}`,
                }}
              >
                {category.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
