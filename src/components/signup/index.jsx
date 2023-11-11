import { useState } from "react";
import { TextField, Button } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Sign Up clicked");
  };

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
      <Button variant="contained" color="primary" onClick={handleSignUp}>
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;
