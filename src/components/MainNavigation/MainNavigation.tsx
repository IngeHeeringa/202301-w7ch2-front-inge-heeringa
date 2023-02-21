import { NavLink } from "react-router-dom";
import NavigationStyled from "./MainNavigationStyled";

const MainNavigation = (): JSX.Element => {
  return (
    <NavigationStyled className="main-navigation">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/user/login">Login</NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default MainNavigation;
