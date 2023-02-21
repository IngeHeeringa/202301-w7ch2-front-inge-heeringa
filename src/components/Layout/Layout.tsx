import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = () => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-title">Robots</h1>
      </header>
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
