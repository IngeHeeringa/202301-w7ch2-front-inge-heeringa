import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
} from "../store/types";
import decode from "jwt-decode";
import { useAppDispatch } from "../store/hooks";
import { loginUserActionCreator } from "../store/features/user/userSlice";

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(process.env.REACT_APP_LOGIN_URL!, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    try {
      const { token } = (await response.json()) as LoginResponse;

      const { username } = decode(token) as CustomTokenPayload;

      dispatch(loginUserActionCreator({ username, token }));
    } catch (error: unknown) {
      throw (error as Error).message;
    }
  };

  return { loginUser };
};

export default useUser;
