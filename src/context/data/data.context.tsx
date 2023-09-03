"use client";
import { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { LoaderContext } from "../loader/loader.context";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

interface Props {
  children: ReactNode;
}

interface ContextInterface {
  data: any;
  setData: (data: any) => any;
}

export const DataContext = createContext<ContextInterface>(null);

export const DataStateProvider = ({ children }: Props) => {
  const [data, setData] = useState<any>(null);
  const { setLoadingPage } = useContext(LoaderContext);

  const fetchData = async () => {
    const data = await client.fetch(getExperiencesAndProjects);
    setData(data);
  };

  useEffect(() => {
    fetchData().then(() => {
      setLoadingPage(false);
    });
  }, [setLoadingPage]);

  useEffect(() => {
    if (data?.listProjects?.items) {
      data.listProjects.items.reverse();
    }
  }, [data]);

  const value = { data, setData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const getExperiencesAndProjects = groq`
  {
    "experiences": *[_type == "experience"] | order(order asc),
    "projects": *[_type == "project"]
  }
`;

// const getExperiencesAndProjects = groq`
//   {
//     "experiences": *[_type == "experience"] | order(order asc),
//     "projects": *[_type == "project"] {
//       ...,
//       author->,
//       categories[]->,
//     } | order(_createdAt desc)
//   }
// `;
