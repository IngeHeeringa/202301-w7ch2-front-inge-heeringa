import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

const robots = [
  {
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
  describe("When it receives a list with a robot with name 'terminator' and a loadRobotsAction", () => {
    test("Then it should return that same list of robots, including the robot with name 'terminator'", () => {
      const expectedRobots = [
        {
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

      const newRobots = robotsReducer(robots, loadRobotsAction);

      expect(newRobots).toStrictEqual(expectedRobots);
    });
  });
});
