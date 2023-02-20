import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure } from "../../types";

const initialState: RobotsStructure = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialState,
  reducers: {
    loadRobots: (currentState, action: PayloadAction<RobotsStructure>) => [
      ...action.payload,
    ],
    deleteRobot: (currentState, action: PayloadAction<string>) =>
      currentState.filter((robot) => robot.id !== action.payload),
  },
});

export const robotsReducer = robotsSlice.reducer;
export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
} = robotsSlice.actions;
