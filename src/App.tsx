import { useEffect } from "react";
import Robot from "./components/Robot/Robot";
import useApi from "./hooks/useApi";
import { useAppSelector } from "./store/hooks";

const App = (): JSX.Element => {
  const { getRobots } = useApi();

  const robots = useAppSelector((state) => {
    return state.robots;
  });

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <ul>
      {robots.map((robot) => (
        <li key={robot.name}>
          <Robot robot={robot} />
        </li>
      ))}
    </ul>
  );
};

export default App;
