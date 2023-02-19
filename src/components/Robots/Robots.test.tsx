import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { robotsReducer } from "../../store/features/robots/robotsSlice";
import Robots from "./Robots";

const store = configureStore({
  reducer: robotsReducer,
});

const mockRobots = [
  {
    name: "Terminator",
    image: "",
    stats: {
      speed: 1,
      endurance: 1,
    },
    creationDate: new Date("2024-05-25"),
  },
  {
    name: "Wall-E",
    image: "",
    stats: {
      speed: 10,
      endurance: 10,
    },
    creationDate: new Date("2024-05-25"),
  },
  {
    name: "R2D2",
    image: "",
    stats: {
      speed: 5,
      endurance: 5,
    },
    creationDate: new Date("2024-05-25"),
  },
];

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppSelector: () => mockRobots,
}));

describe("Given a Robots component", () => {
  describe("When rendered", () => {
    test("Then it should show a list of robots", () => {
      render(
        <Provider store={store}>
          <Robots />
        </Provider>
      );

      const robots = screen.getAllByRole("listitem");

      robots.forEach((robot) => expect(robot).toBeInTheDocument());
    });
  });
});
