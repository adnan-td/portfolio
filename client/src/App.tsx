import ApolloWrapper from "./apollo";
import Home from "./routes/home/home";
import { ScreenWidth, WidthContext } from "./context/screenwidth/screenwidth.context";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectsRoute from "./routes/projects/projects";
import ComingSoon from "./components/commingsoon/commingsoon";
import NotFound from "./components/notfound/notfound";
import { DataStateComponent } from "./context/data/data.context";
import ContactRoute from "./routes/contact/contact.route";
import FeaturedRoute from "./routes/featured/featured.route";
import {
  CrownclothingContent,
  PixelAlienContent,
  ReactMouseFollowerContent,
  ScripthomeContent,
  SensorlifelineContent,
} from "./routes/featured/featured.content";
import { Helmet } from "react-helmet";
import { NavStatusProvider } from "./context/navstatus/navstatus.context";
import { FollowerProvider, useControlOptions } from "react-mouse-follower";
import FooterComponent from "./components/footer/footer.component";
import NavbarComponent from "./components/navbar/navbar.component";
import { LoaderState } from "./context/loader/loader.context";
import CallToAction from "./components/calltoaction/calltoaction";
import { ReactNode, useContext, useEffect } from "react";

function App() {
  return (
    <>
      <Helmet>
        <title>Adnan Husain - Software Developer and Engineer</title>
        <meta
          name="description"
          content="Experienced software engineer specializing in full-stack application development. Explore my portfolio to see my projects, skills, and achievements in front-end and back-end development, UI/UX, game development, problem-solving and more."
        />
      </Helmet>
      <ApolloWrapper>
        <ScreenWidth>
          <Sublayout>
            <Routes>
              <Route path="/" element={<Structure element={<Home />} />} />
              <Route path="/about" element={<Structure element={<ComingSoon />} />} />
              <Route path="/blogs" element={<Structure element={<ComingSoon />} />} />
              <Route path="/contact" element={<Structure element={<ContactRoute />} />} />
              <Route path="/projects">
                <Route index element={<Structure element={<ProjectsRoute />} />} />
                <Route
                  path="react-mouse-follower"
                  element={
                    <Structure
                      element={<FeaturedRoute id="1" text={<ReactMouseFollowerContent />} />}
                    />
                  }
                />
                <Route
                  path="pixelalien"
                  element={
                    <Structure element={<FeaturedRoute id="2" text={<PixelAlienContent />} />} />
                  }
                />
                <Route
                  path="scripthome"
                  element={
                    <Structure element={<FeaturedRoute id="3" text={<ScripthomeContent />} />} />
                  }
                />
                <Route
                  path="sensorlifeline"
                  element={
                    <Structure
                      element={<FeaturedRoute id="4" text={<SensorlifelineContent />} />}
                    />
                  }
                />
                <Route
                  path="crownclothing"
                  element={
                    <Structure element={<FeaturedRoute id="5" text={<CrownclothingContent />} />} />
                  }
                />
              </Route>
              <Route path="/*" element={<Structure element={<NotFound />} />} />
            </Routes>
          </Sublayout>
        </ScreenWidth>
      </ApolloWrapper>
    </>
  );
}

export default App;

function Structure({ element }: { element: JSX.Element }) {
  const { clearAllLayers } = useControlOptions();
  const location = useLocation();
  useEffect(() => {
    clearAllLayers();
  }, [location]);

  return (
    <div className={"min-h-screen w-screen "}>
      <NavbarComponent />
      {element}
      <FooterComponent />
      <CallToAction />
    </div>
  );
}

function Sublayout({ children }: { children: ReactNode }) {
  const { screenwidth } = useContext(WidthContext);
  return (
    <FollowerProvider visible={screenwidth > 640}>
      <NavStatusProvider>
        <LoaderState>
          <DataStateComponent>{children}</DataStateComponent>
        </LoaderState>
      </NavStatusProvider>
    </FollowerProvider>
  );
}
