import { useState } from "react";
import ApolloWrapper from "./apollo";
import { MousePos } from "./context/mousepos/mouse.context";
import Home from "./routes/home/home";
import SubLayout from "./sublayout";
import { ScreenWidth } from "./context/screenwidth/screenwidth.context";

function App() {
  return (
    <ApolloWrapper>
      <ScreenWidth>
        <MousePos>
          <SubLayout>
            <Home />
          </SubLayout>
        </MousePos>
      </ScreenWidth>
    </ApolloWrapper>
  );
}

export default App;
