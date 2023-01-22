import "./assets/styles/App.css";
import Counter from "./Components/Counter";
import Separator from "./Components/Separator";
import WellcomeOne from "./Components/WellcomeClass";
import WellcomeTwo from "./Components/WellcomeFun";

const App = () => {
  return (
    <div className="container-app">
      <WellcomeOne />
      <WellcomeTwo />

      <Separator />

      <Counter />
    </div>
  );
};

export default App;
