import { mockedRobots } from "../../../mocks/mockedData";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
  robotsReducer,
} from "./robotsSlice";

const robots = [
  {
    id: "1",
    name: "Terminator",
    image: "",
    stats: {
      speed: 5,
      endurance: 6,
    },
    creationDate: new Date("2022-03-25"),
  },
];

describe("Given a robotsReducer function", () => {
  describe("When it receives a list with a robot with name 'Terminator' and a loadRobotsAction", () => {
    test("Then it should return that same list of robots, including the robot with name 'Terminator'", () => {
      const expectedRobots = [
        {
          id: "1",
          name: "Terminator",
          image: "",
          stats: {
            speed: 5,
            endurance: 6,
          },
          creationDate: new Date("2022-03-25"),
        },
      ];

      const loadRobotsAction = loadRobotsActionCreator(robots);

      const newRobots = robotsReducer([], loadRobotsAction);

      expect(newRobots).toStrictEqual(expectedRobots);
    });
  });

  describe("When it receives a list of two robots that have '1' and '2' ids respectively and a deleteRobot action that receives 1", () => {
    test("Then it should return a list of robots only with the robot that have id 2", () => {
      const robots = mockedRobots;
      const deleteRobot = deleteRobotActionCreator;
      const expectedRobots = [robots[1]];

      const resultedRobots = robotsReducer(robots, deleteRobot("1"));

      expect(resultedRobots).toStrictEqual(expectedRobots);
    });
  });
});
