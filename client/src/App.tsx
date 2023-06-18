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
import ContactRoute from "./routes/contact/contact.route";
import FeaturedRoute from "./routes/featured/featured.route";
import {
  CrownclothingContent,
  PixelAlienContent,
  ScripthomeContent,
  SensorlifelineContent,
} from "./routes/featured/featured.content";

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
                <Route path="/contact" element={<ContactRoute />} />
                <Route path="/projects">
                  <Route index element={<ProjectsRoute />} />
                  <Route
                    path="pixelalien"
                    element={<FeaturedRoute id="1" text={<PixelAlienContent />} />}
                  />
                  <Route
                    path="scripthome"
                    element={<FeaturedRoute id="2" text={<ScripthomeContent />} />}
                  />
                  <Route
                    path="sensorlifeline"
                    element={<FeaturedRoute id="3" text={<SensorlifelineContent />} />}
                  />
                  <Route
                    path="crownclothing"
                    element={<FeaturedRoute id="4" text={<CrownclothingContent />} />}
                  />
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
