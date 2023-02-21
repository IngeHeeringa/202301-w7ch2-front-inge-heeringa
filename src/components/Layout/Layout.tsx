import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import LayoutStyled from "./LayoutStyled";

const Layout = () => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-title">Robots</h1>
        <MainNavigation />
      </header>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
