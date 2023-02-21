import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import Wrapper from "../../mocks/Wrapper";
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
    <Wrapper>
      <RobotsStyled className="robots">
        <h2 className="robots__title">All robots</h2>

        <ul className="robots__list">
          {robots.map((robot) => (
            <li className="robots__robot" key={robot.name}>
              <Robot robot={robot} />
            </li>
          ))}
        </ul>
      </RobotsStyled>
    </Wrapper>
  );
};

export default Robots;
