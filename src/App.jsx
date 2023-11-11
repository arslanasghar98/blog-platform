import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
