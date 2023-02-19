import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import Robot from "../Robot/Robot";
import RobotsStyled from "./RobotsStyled";

const Robots = () => {
  const { getRobots } = useApi();

  const robots = useAppSelector((state) => {
    return state.robots;
  });

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <RobotsStyled className="robots">
      {robots.map((robot) => (
        <li key={robot.name}>
          <Robot robot={robot} />
        </li>
      ))}
    </RobotsStyled>
  );
};

export default Robots;
