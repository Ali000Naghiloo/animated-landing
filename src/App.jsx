import "./App.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <Provider store={store}>
          <Router>
            <AllRoutes />
          </Router>
        </Provider>
      </div>
    </>
  );
}

export default App;
