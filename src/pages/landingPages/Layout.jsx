import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div className=" md:max-w-6xl md:mx-auto">
        <NavBar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
