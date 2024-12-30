import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/landingPages/HomePage";
import Layout from "./pages/landingPages/Layout";
import AboutusPage from "./pages/landingPages/AboutusPage";
import OurCocoaPage from "./pages/landingPages/OurCocoaPage";
import ContactPage from "./pages/landingPages/ContactPage";
import ErrorPage from "./components/ErrorPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import ForgotPassPage from "./pages/AuthPage/ForgotPassPage";
import PasswordResetPage from "./pages/AuthPage/PasswordResetPage";

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
          <Route path="auth">
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forgotpassword" element={<ForgotPassPage />} />
            <Route path="resetpassword" element={<PasswordResetPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
// md:max-w-6xl md:mx-auto p-4
