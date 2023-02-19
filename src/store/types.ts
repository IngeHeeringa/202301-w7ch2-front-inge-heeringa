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
