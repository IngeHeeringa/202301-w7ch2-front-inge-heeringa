import { useCallback } from "react";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlice";
import { useAppDispatch } from "../store/hooks";
import { ApiResponse } from "../store/types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getRobots = useCallback(async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL!);

      const robots = (await response.json()) as ApiResponse;

      dispatch(loadRobotsActionCreator(robots.robots));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getRobots };
};

export default useApi;
