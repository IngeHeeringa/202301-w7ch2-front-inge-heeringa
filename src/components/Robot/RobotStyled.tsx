import styled from "styled-components";

const RobotStyled = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 355px;
  width: 312px;
  border-radius: 15px;
  background-color: var(--accentColor);
  color: var(--primaryColor);

  .robot {
    &__title {
      font-family: var(--displayFont);
      font-size: 2rem;
      margin: 0;
    }

    &__image {
      border-radius: 15px 15px 0 0;
      height: 255px;
      max-width: 100%;
      justify-items: center;
      object-fit: cover;
    }

    &__body {
      display: flex;
      flex-direction: column;
      padding: 15px;
      gap: 15px;
    }
  }

  .stats {
    display: flex;
    justify-content: space-between;

    &__name {
      font-weight: bolder;
    }
  }

  .creation-date {
    display: flex;
    flex-direction: column;

    &__label {
      color: var(--secondaryColor);
      font-size: 1rem;
    }
  }
`;

export default RobotStyled;
