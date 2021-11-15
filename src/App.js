import DemoUseEffect from "./UseEffect/DemoUseEffect";
import DemoUseState from "./UseState/DemoUseState";

function App() {
  return (
    <div className="App">
      <h2>UseState</h2>
      <DemoUseState />
      <hr />

      <h2>Use Effect</h2>
      <DemoUseEffect />
      <hr />

    </div>
  );
}

export default App;
