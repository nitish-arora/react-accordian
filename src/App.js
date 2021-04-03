import Accordian from "./accordian/accordian";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Accordian</h1>
      <Accordian title={"Accordian1"} content={"This is accordian 1"} />
      <Accordian title={"Accordian2"} content={"This is accordian 2"} />
      <Accordian title={"Accordian3"} content={"This is accordian 3"} />
      <Accordian title={"Accordian4"} content={"This is accordian 4"} />
      <Accordian title={"Accordian5"} content={"This is accordian 5"} />
    </div>
  );
}
