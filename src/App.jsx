import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Goals from "./Pages/Planning/Goals";
import ProductLayout from "./Pages/Products/ProductLayout";
import BlogDetailsPage from "./Pages/Blog/BlogDetailsPage";
import BlogPage from "./Pages/Blog/BlogPage";
import MutualFunds from "./Pages/Products/MutualFunds";
import LifeInsurancePage from "./Pages/Products/LifeInsurancePage";
import ChildEducationCalculator from "./Pages/Planning/ChildEducationCalculator";
import ChildWeddingCalculator from "./Pages/Planning/ChildWeddingCalculator";
import DreamHomeCalculator from "./Pages/Planning/DreamHomeCalculator";
import DreamCarCalculator from "./Pages/Planning/DreamCarCalculator";
import SIPCalculator from "./Pages/Planning/SIPCalculator";
import RetirementCalculator from "./Pages/Planning/RetirementCalculator";
import DreamVacationCalculator from "./Pages/Planning/DreamVacationCalculator";
import GeneralInsurancePage from "./Pages/Products/GeneralInsurancePage";
import PageNotFound from "./Pages/ErrorPages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="services/:slug" element={<Services />} />
        <Route path="/products/mutual-funds" element={<MutualFunds />} />
        <Route
          path="/products/life-insurance"
          element={<LifeInsurancePage />}
        />
        <Route
          path="/products/general-insurance"
          element={<GeneralInsurancePage />}
        />
        <Route
          path="/goals/child-education"
          element={<ChildEducationCalculator />}
        />{" "}
        <Route
          path="/goals/child-wedding"
          element={<ChildWeddingCalculator />}
        />{" "}
        <Route path="/goals/dream-home" element={<DreamHomeCalculator />} />{" "}
        <Route path="/goals/dream-car" element={<DreamCarCalculator />} />{" "}
        <Route
          path="/goals/dream-vacation"
          element={<DreamVacationCalculator />}
        />{" "}
        <Route
          path="/goals/retirement-plan"
          element={<RetirementCalculator />}
        />{" "}
        <Route path="/goals/sip-plan" element={<SIPCalculator />} />{" "}
        <Route path="goals/:slug" element={<Goals />} />
        <Route path="blog" element={<BlogPage />} />{" "}
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
