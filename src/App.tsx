import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { Layout } from "./components/layout/layout";
import { ThemeProvider } from "styled-components";
import { dark } from "./style/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={dark}>
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
