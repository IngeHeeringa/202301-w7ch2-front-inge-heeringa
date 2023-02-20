import { renderHook } from "@testing-library/react";
import { server } from "../mocks/setupServer";
import Wrapper from "../mocks/Wrapper";
import { useAppDispatch } from "../store/hooks";
import useApi from "./useApi";

jest.mock("../store/hooks", () => ({
  useAppDispatch: jest.fn(),
}));

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe("Given a useApi hook", () => {
  describe("When we call its inner getRobots function", () => {
    test("Then dispatch should be called", async () => {
      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      await getRobots();

      expect(useAppDispatch).toHaveBeenCalled();
    });
  });
});
