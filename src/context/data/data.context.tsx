"use client";
import { API } from "@aws-amplify/api";
import { useState, createContext, ReactNode, useCallback, useContext, useEffect } from "react";
import { LoaderContext } from "../loader/loader.context";
import config from "@/aws-exports";

interface Props {
  children: ReactNode;
}

interface ContextInterface {
  data: any;
  setData: (data: any) => any;
}

API.configure(config);

export const DataContext = createContext<ContextInterface>(null);

export const DataStateComponent = ({ children }: Props) => {
  const [data, setData] = useState<any>(null);
  const { setLoadingPage } = useContext(LoaderContext);

  const fetchData = async () => {
    const res = (await API.graphql({
      query: listExperiencesAndProjects,
    })) as any;
    setData(res?.data);
  };

  useEffect(() => {
    fetchData().then(() => {
      setLoadingPage(false);
    });
  }, [setLoadingPage]);

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
