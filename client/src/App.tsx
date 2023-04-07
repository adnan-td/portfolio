import { useState } from "react";
import ApolloWrapper from "./apollo";
import { MousePos } from "./context/mousepos/mouse.context";
import Home from "./routes/home/home";
import SubLayout from "./sublayout";

function App() {
  return (
    <ApolloWrapper>
      <MousePos>
        <SubLayout>
          <Home />
        </SubLayout>
      </MousePos>
    </ApolloWrapper>
  );
}

export default App;
