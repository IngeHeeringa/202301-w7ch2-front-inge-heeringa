import Robot from "./components/Robot/Robot";

const App = (): JSX.Element => {
  const robot = {
    name: "Terminator",
    image:
      "https://4.bp.blogspot.com/-RoaN1bKLM5k/VZr3d82iiQI/AAAAAAAA8nc/L37sR_nvmiI/w640/terminator.jpg",
    stats: {
      speed: 5,
      endurance: 6,
    },
    creationDate: new Date("2024-05-25"),
  };

  return (
    <>
      <Robot robot={robot} />
    </>
  );
};

export default App;
