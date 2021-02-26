import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import First from "./components/First";
import Second from "./components/Second";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">First</Link> | <Link to="/second">Second</Link>
        </nav>

        <Switch>
          <Route path="/" exact>
            <First />
          </Route>

          <Route path="/second">
            <Second />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
