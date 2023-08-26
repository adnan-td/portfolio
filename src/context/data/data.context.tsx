"use client";
import { useState, createContext, ReactNode, useContext, useEffect } from "react";
import { LoaderContext } from "../loader/loader.context";
import axios from "axios";

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
    const res = await axios.post("/api/aws", {
      query: listExperiencesAndProjects,
    });
    setData(res?.data?.data);
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

const listExperiencesAndProjects = /* GraphQL */ `
  query {
    listExperiences {
      items {
        title
        subtitle
        description
        date
        tech
        order
      }
    }
    listProjects {
      items {
        id
        title
        tech
        image
        github
        url
      }
    }
  }
`;
