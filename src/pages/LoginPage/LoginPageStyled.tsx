import styled from "styled-components";

const LoginPageStyled = styled.section`
  padding: 100px 0;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--accentColor);
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 100px;

    &__username,
    &__password,
    &__button {
      border-radius: 10px;
      padding: 10px;
    }

    &__button {
      background-color: var(--accentColor);
      color: var(--primaryColor);
      cursor: pointer;
    }
  }

  .login-form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }
`;

export default LoginPageStyled;
