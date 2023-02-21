import { JwtPayload } from "jwt-decode";

export interface RobotStructure {
  id: string;
  name: string;
  image: string;
  stats: {
    speed: number;
    endurance: number;
  };
  creationDate: Date;
}

export interface ApiResponseStructure {
  robots: RobotsStructure;
}

export type RobotsStructure = RobotStructure[];

export interface UserStructure {
  username: string;
  token: string;
}

export interface UserState extends UserStructure {
  isLogged: boolean;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload extends JwtPayload {
  username: string;
}
