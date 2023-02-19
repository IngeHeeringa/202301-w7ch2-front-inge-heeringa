import { rest } from "msw";
import { mockedApiResponse } from "./mockedData";

const apiUrl = process.env.REACT_APP_API_URL!;

const handlers = [
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedApiResponse));
  }),
];

export default handlers;
