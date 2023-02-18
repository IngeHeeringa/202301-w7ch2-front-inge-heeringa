import { RobotStructure } from "../../store/types";

interface RobotProps {
  robot: RobotStructure;
}

const Robot = ({
  robot: { name, image, stats, creationDate },
}: RobotProps): JSX.Element => {
  const localDateFormat = creationDate.toLocaleString().split(" ")[0];

  return (
    <article className="robot">
      <h3 className="robot__title">{name}</h3>
      <img className="robot__image" src={image} alt={name}></img>
      <ul className="robot__stats">
        {Object.entries(stats).map((stat) => (
          <li>
            {stat[0]}: {stat[1]}
          </li>
        ))}
      </ul>
      <span className="robot__creation-date">{localDateFormat}</span>
    </article>
  );
};

export default Robot;
