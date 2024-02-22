import { Outlet } from "react-router-dom";
import Header from "../Components/UI/Header/Header";
import Footer from "../Components/UI/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
