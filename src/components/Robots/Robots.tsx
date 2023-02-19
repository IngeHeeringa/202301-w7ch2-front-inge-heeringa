import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import Robot from "../Robot/Robot";

const Robots = () => {
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

export default Robots;
