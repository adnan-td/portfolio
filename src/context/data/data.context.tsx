import { useState, createContext, ReactNode, useCallback, useContext, useEffect } from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { LoaderContext } from "../loader/loader.context";

interface Props {
  children: ReactNode;
}

interface ContextInterface {
  data: any;
  setData: (data: any) => any;
}

export const DataContext = createContext<ContextInterface>(null);

export const DataStateComponent = ({ children }: Props) => {
  const [data, setData] = useState<any>(null);
  const { data: apollodata, loading } = useQuery(fwQuery);
  const { setLoadingPage } = useContext(LoaderContext);

  useEffect(() => {
    setTimeout(() => {
      if (!loading) {
        const newdata = { ...apollodata };
        newdata.projects = [...apollodata.projects].sort(() => Math.random() - 0.5);
        setData(newdata);
        setLoadingPage(false);
      }
    }, 1000);
  }, [loading]);

  const value = { data, setData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const fwQuery = gql`
  {
    experiences(options: { sort: { order: ASC } }) {
      date
      description
      subtitle
      title
      tech
    }

    projects {
      id
      title
      tech
      image
      github
      url
    }
  }
`;
