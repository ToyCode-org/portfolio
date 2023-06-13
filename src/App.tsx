import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { Layout } from "./components/layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
