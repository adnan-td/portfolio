import { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { revalidate } from "@/constants";

async function getPostMap(): Promise<MetadataRoute.Sitemap> {
  const posts = (
    await client.fetch(getParamQuery, {
      next: {
        revalidate: revalidate,
      },
    })
  ).posts as Post[];
  return posts.map((post) => {
    return {
      url: `https://adnansh.in/blog/${post.slug.current}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    };
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // console.log("Generating site map");
  const posts = await getPostMap();
  return [
    {
      url: "https://adnansh.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://adnansh.in/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://adnansh.in/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://adnansh.in/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://adnansh.in/projects/pixelalien",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://adnansh.in/projects/scripthome",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://adnansh.in/projects/sensorlifeline",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://adnansh.in/projects/crownclothing",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://adnansh.in/projects/react-mouse-follower",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...posts,
  ];
}

const getParamQuery = groq`
  {
    "posts": *[_type == "post"] {
      slug,
    }
  }
`;
