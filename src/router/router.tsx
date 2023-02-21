import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Homepage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/user/login", element: <LoginPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
