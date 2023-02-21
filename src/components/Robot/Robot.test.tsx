import { render, screen } from "@testing-library/react";
import GlobalStyles from "../../GlobalStyles";
import Wrapper from "../../mocks/Wrapper";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it receives a robot named 'Terminator' and it renders", () => {
    test("Then it should show the name 'Terminator' in a heading", () => {
      const robot = {
        id: "1",
        name: "Terminator",
        image: "",
        stats: {
          speed: 5,
          endurance: 6,
        },
        creationDate: new Date("2024-05-25"),
      };

      render(
        <Wrapper>
          <GlobalStyles />
          <Robot robot={robot} />
        </Wrapper>
      );
      const name = screen.getByRole("heading", { name: robot.name });

      expect(name).toBeInTheDocument();
    });
  });
});
