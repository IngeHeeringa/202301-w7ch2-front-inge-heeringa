import { useCallback } from "react";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../store/features/robots/robotsSlice";
import { useAppDispatch } from "../store/hooks";
import { ApiResponseStructure } from "../store/types";

const useApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL!;

  const getRobots = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);

      const { robots } = (await response.json()) as ApiResponseStructure;

      dispatch(loadRobotsActionCreator(robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch, apiUrl]);

  const deleteRobot = useCallback(
    async (id: string) => {
      await fetch(`${apiUrl}/delete/${id}`, {
        method: "DELETE",
      });

      dispatch(deleteRobotActionCreator(id));
    },
    [apiUrl, dispatch]
  );

  return { getRobots, deleteRobot };
};

export default useApi;
