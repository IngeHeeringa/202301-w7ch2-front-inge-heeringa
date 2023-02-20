import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import DeleteAction from "./DeleteAction";

jest.mock("../../store/hooks", () => ({
  useAppDispatch: jest.fn(),
}));

describe("Given a DeleteAction component", () => {
  describe("When it renders itself", () => {
    test("Then it should show a button with accesible name 'Delete robot card'", () => {
      render(<DeleteAction id="0" />, {
        wrapper({ children }) {
          return <Wrapper>{children}</Wrapper>;
        },
      });

      const button = screen.getByRole("button", {
        name: "Delete robot card",
      });

      expect(button).toBeInTheDocument();
    });
  });
});
