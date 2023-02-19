import { configureStore } from "@reduxjs/toolkit";
import { robotsReducer } from "../store/features/robots/robotsSlice";
import { ApiResponseStructure, RobotsStructure } from "../store/types";

export const mockedRobots: RobotsStructure = [
  {
    id: "1",
    name: "Terminator",
    image: "terminatorImage",
    stats: {
      speed: 5,
      endurance: 5,
    },
    creationDate: new Date("2025-04-22T00:00:00.000+00:00"),
  },
  {
    id: "2",
    name: "Wall-E",
    image: "Wall-EImage",
    stats: {
      speed: 2,
      endurance: 2,
    },
    creationDate: new Date("2050-09-06T00:00:00.000+00:00"),
  },
];

export const mockedApiResponse: ApiResponseStructure = {
  robots: mockedRobots,
};

export const mockedStore = configureStore({
  reducer: {
    robots: robotsReducer,
  },
});
