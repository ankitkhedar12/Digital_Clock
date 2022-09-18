import './App.css';

import StateExample from "./Components/StateExample";
import Particle from "./Components/Particle";

function App() {
  // const [value, onChange] = useState(new Date());

  return (
    <div className="App" >
      <Particle />
      <StateExample />
    </div>
  );
}

export default App;
