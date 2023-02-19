import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure } from "../../types";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [] as RobotsStructure,
  reducers: {
    loadRobots: (
      currentRobots: RobotsStructure,
      action: PayloadAction<RobotsStructure>
    ) => [...action.payload],
    deleteRobot: (
      currentRobots: RobotsStructure,
      action: PayloadAction<number>
    ) => currentRobots.filter(({ id }) => +id !== action.payload),
  },
});

export const robotsReducer = robotsSlice.reducer;
export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
} = robotsSlice.actions;
