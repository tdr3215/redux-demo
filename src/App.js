import logo from "./logo.svg";
import "./App.css";
import StateCounter from "./components/StateCounter";
import Counter from "./reduxComp/Counter";

function App() {
  return (
    <div className="App">
      {/* <StateCounter /> */}
      <Counter />
    </div>
  );
}

export default App;
