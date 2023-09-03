interface Response {
  _type: string;
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  _rev?: string;
}

interface Author extends Response {
  name: string;
  slug: string;
  image: any;
  bio: any;
}

interface Color {
  hex: string;
}

interface Category extends Response {
  title: string;
  color: Color;
  bgColor: Color;
  description: string;
}

interface Slug {
  _type: string;
  current: string;
}

interface Post extends Response {
  author: Author;
  categories: Category[];
  slug: Slug;
  title: string;
  mainImage: any;
  publishedAt: string;
  description: string;
  headings?: any;
}
