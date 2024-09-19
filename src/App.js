import logo from "./logo.svg";
import "./App.css";
import MiniDrawer from "./components/Sidebar";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

function App() {
  return (
    <div className="App">
      <MiniDrawer />
    </div>
  );
}

export default App;
