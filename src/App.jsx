import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import BlogForm from "./components/blogCreate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-blog" element={<BlogForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
