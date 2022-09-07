import "./App.css";
import Navigation from "./Components/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404/PagenotFound";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
