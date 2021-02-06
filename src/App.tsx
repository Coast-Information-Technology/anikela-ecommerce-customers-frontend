import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import CTA from "./pages/CTA page/CTA";
import FourZeroFour from "./pages/FourZeroFour";
// import male_cta from "./pages/CTA page/male_cta"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={Homepage} exact></Route>
          <Route path="/products/men" component={CTA}></Route>
          <Route path="/products/women" component={CTA}></Route>
          <Route path="*" component={FourZeroFour}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
