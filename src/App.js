import Carousel from "./components/Carousel";
import data from "./data";

function App() {
  return (
    <div className="app">
      <Carousel slides={data} />
    </div>
  );
}

export default App;
