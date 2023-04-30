import { useState } from "react";
import ApolloWrapper from "./apollo";
import { MousePos } from "./context/mousepos/mouse.context";
import Home from "./routes/home/home";
import SubLayout from "./sublayout";
import { ScreenWidth } from "./context/screenwidth/screenwidth.context";
import { Routes, Route } from "react-router-dom";
import ProjectsRoute from "./routes/projects/projects";
import ComingSoon from "./components/commingsoon/commingsoon";
import NotFound from "./components/notfound/notfound";
import { DataStateComponent } from "./context/data/data.context";

function App() {
  return (
    <ApolloWrapper>
      <ScreenWidth>
        <MousePos>
          <SubLayout>
            <DataStateComponent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<ComingSoon />} />
                <Route path="/blogs" element={<ComingSoon />} />
                <Route path="/contact" element={<ComingSoon />} />
                <Route path="/projects">
                  <Route index element={<ComingSoon />} />
                  <Route path="scripthome" element={<ComingSoon />} />
                  <Route path="sensorlifeline" element={<ComingSoon />} />
                  <Route path="crownclothing" element={<ComingSoon />} />
                </Route>
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </DataStateComponent>
          </SubLayout>
        </MousePos>
      </ScreenWidth>
    </ApolloWrapper>
  );
}

export default App;
