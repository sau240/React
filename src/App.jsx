import "./App.css";
import Home from "./pages/Home.jsx"; // ✅ if App.jsx is in `src/`

const App = () => {
  return (
    <div className="font-poppins font-normal">
      <Home />
    </div>
  );
};

export default App;
