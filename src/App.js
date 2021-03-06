import DemoUseEffect from "./UseEffect/DemoUseEffect";
import DemoUseState from "./UseState/DemoUseState";
import DemoUseContext from "./UseContext/DemoUseContext"
import DemoUseReducer from "./UseReducer/DemoUseReducer"
import DemoUseCallback from "./UseCallback/DemoUseCallback";


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

      <h2>UseReducer</h2>
      <DemoUseReducer />
      <hr />

      <h2>UseCallback</h2>
      <DemoUseCallback />
      <hr />
    </div>
  );
}

export default App;
