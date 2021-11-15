import DemoUseEffect from "./UseEffect/DemoUseEffect";
import DemoUseState from "./UseState/DemoUseState";
import DemoUseContext from "./UseContext/DemoUseContext"

function App() {
  return (
    <div className="App">
      <h2>UseState</h2>
      <DemoUseState />
      <hr />

      <h2>Use Effect</h2>
      <DemoUseEffect />
      <hr />

      <h2>Use Context</h2>
      <DemoUseContext />
      <hr />
      
    </div>
  );
}

export default App;
