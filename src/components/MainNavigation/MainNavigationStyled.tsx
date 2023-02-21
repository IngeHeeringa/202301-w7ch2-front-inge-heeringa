import styled from "styled-components";

const NavigationStyled = styled.nav`
  ul {
    color: var(--primaryColor);
    display: flex;
    justify-content: space-between;
  }

  li {
    background-color: var(--accentColor);
    padding: 20px 50px;
    border-radius: 10px;
  }
`;

export default NavigationStyled;
