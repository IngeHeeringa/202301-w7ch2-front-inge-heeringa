import useApi from "../../hooks/useApi";
import DeleteActionStyled from "./DeleteActionStyled";

interface ActionProps {
  id: string;
}

const DeleteAction = ({ id }: ActionProps): JSX.Element => {
  const { deleteRobot } = useApi();

  return (
    <DeleteActionStyled
      onClick={() => deleteRobot(id)}
      aria-label="Delete robot card"
    >
      <i className="fas fa-light fa-circle-xmark"></i>
    </DeleteActionStyled>
  );
};

export default DeleteAction;
