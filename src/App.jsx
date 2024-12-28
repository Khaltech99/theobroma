import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/landingPages/HomePage";
import Layout from "./pages/landingPages/Layout";
import AboutusPage from "./pages/landingPages/AboutusPage";
import OurCocoaPage from "./pages/landingPages/OurCocoaPage";
import ContactPage from "./pages/landingPages/ContactPage";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <div className=" ">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutusPage />} />
            <Route path="/ourcocoa" element={<OurCocoaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
// md:max-w-6xl md:mx-auto p-4
