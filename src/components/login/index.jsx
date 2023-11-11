import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Login clicked");
  };
  const navigate = useNavigate();

  return (
    <div style={{ paddingLeft: "20%" }}>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
      <Button
        sx={{ marginLeft: 5 }}
        variant="contained"
        color="primary"
        onClick={() => navigate("/signup")}
      >
        signup
      </Button>
    </div>
  );
};

export default Login;
