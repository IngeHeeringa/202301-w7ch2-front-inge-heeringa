import { Provider } from "react-redux";
import { mockedStore } from "./mockedData";

interface WrapperPropsStructure {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperPropsStructure) => {
  return <Provider store={mockedStore}>{children}</Provider>;
};

export default Wrapper;
