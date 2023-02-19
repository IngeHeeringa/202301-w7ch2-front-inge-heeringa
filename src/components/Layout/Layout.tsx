import Robots from "../Robots/Robots";
import LayoutStyled from "./LayoutStyled";

const Layout = () => {
  return (
    <LayoutStyled>
      <header className="main-header">
        <h1 className="main-title">Robots</h1>
      </header>
      <Robots />
    </LayoutStyled>
  );
};

export default Layout;
