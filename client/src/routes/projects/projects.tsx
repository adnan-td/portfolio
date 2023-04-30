import React, { useContext, useEffect } from "react";
import { LoaderContext } from "../../context/loader/loader.context";

export default function ProjectsRoute() {
  const { setLoadingPage } = useContext(LoaderContext);
  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 800);
  }, []);

  return (
    <div className="w-screen flex justify-center h-screen">
      <h1>Hello Projects</h1>
    </div>
  );
}
