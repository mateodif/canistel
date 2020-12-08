import {
  ChakraProvider,
  theme
} from "@chakra-ui/react";
import * as React from "react";
import {
  BrowserRouter,
  Route, Switch
} from "react-router-dom";
import BaseLayout from "./components/layouts/BaseLayout";

interface IAppProps { }

const App: React.FC<IAppProps> = props => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <BaseLayout>
        <Switch>

        </Switch>
      </BaseLayout>
    </ChakraProvider>
  </BrowserRouter>
)

export default App;