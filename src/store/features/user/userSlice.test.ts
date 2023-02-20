import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given the userReducer function", () => {
  describe("When it receives a user with a negative isLogged status and a loginUserAction", () => {
    test("Then it should return a user with username '', a token 'abc123', an id  and a positive isLogged status", () => {
      const currentUserState = {
        isLogged: false,
      };
      const user = {
        username: "New user",
        token: "abc123",
        id: "xyz987",
      };
      const expectedUserState = {
        username: "New user",
        token: "abc123",
        id: "xyz987",
        isLogged: true,
      };
      const loginUserAction = loginUserActionCreator(user);

      const newUser = userReducer(currentUserState, loginUserAction);

      expect(newUser).toStrictEqual(expectedUserState);
    });
  });
});
