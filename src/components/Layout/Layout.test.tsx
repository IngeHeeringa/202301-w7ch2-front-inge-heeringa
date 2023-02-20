import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it renders itself", () => {
    test("Then it should show a heading with an accesible name 'Robots'", () => {
      render(
        <Wrapper>
          <Layout />
        </Wrapper>
      );

      const title = screen.getByRole("heading", {
        name: "Robots",
      });

      expect(title).toBeInTheDocument();
    });
  });
});
