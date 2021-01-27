import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage"
import CTA from "./pages/CTA page/CTA"

function App() {
  return (
    <Router>
      <Layout>
        <Route path='/' component={Homepage} exact></Route>
      <Route path='/products/men' component={CTA}></Route>
      <Route path='/products/women' component={CTA}></Route>
      </Layout>
      
    </Router>
  )
}

export default App;
