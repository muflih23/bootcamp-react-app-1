import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((page, index) => (
          <Route
            path={page.path}
            element={
              <Suspense>
                <page.component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
