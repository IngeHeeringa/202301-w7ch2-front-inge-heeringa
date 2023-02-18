import { RobotStructure } from "../../store/types";
import RobotStyled from "./RobotStyled";

interface RobotProps {
  robot: RobotStructure;
}

const Robot = ({
  robot: { name, image, stats, creationDate },
}: RobotProps): JSX.Element => {
  const localDateFormat = creationDate.toLocaleString().split("T")[0];

  return (
    <RobotStyled className="robot">
      <img className="robot__image" src={image} alt={name} />
      <div className="robot__body">
        <h3 className="robot__title">{name}</h3>
        <ul className="robot__stats">
          {Object.entries(stats).map((stat) => (
            <li className="stats">
              <span className="stats__name">
                {stat[0].charAt(0).toUpperCase() + stat[0].slice(1)}
              </span>
              <span className="stats__value">{stat[1]}</span>
            </li>
          ))}
        </ul>
        <div className="robot__creation-date creation-date">
          <span className="creation-date__label">Created on</span>
          <span className="creation-date__date">{localDateFormat}</span>
        </div>
      </div>
    </RobotStyled>
  );
};

export default Robot;
