import styled from "styled-components";

const RobotsStyled = styled.div`
  .robots {
    &__list {
      display: grid;
      gap: 4rem;
      grid-template-columns: repeat(auto-fit, 312px);
      justify-content: space-between;
    }

    &__title {
      font-family: var(--displayFont);
      color: var(--accentColor);
      font-size: 2.5rem;
    }
  }
`;

export default RobotsStyled;
