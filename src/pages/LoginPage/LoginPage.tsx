import { useState } from "react";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  const { loginUser } = useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
  };

  const userCredentials = {
    username,
    password,
  };

  return (
    <LoginPageStyled>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-wrapper">
          <label>
            Username
            <input
              className="login-form__username"
              onChange={handleChangeName}
              value={username}
              type="text"
            />
          </label>
          <label>
            Password
            <input
              className="login-form__password"
              onChange={handleChangePassword}
              value={password}
              type="password"
            />
          </label>
        </div>
        <button
          className="login-form__button"
          onClick={() => loginUser(userCredentials)}
          type="submit"
        >
          <Link to="/">Submit</Link>
        </button>
      </form>
    </LoginPageStyled>
  );
};

export default LoginPage;
