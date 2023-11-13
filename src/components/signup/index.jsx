import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { insertUser, signup } from "../../supabaseFunctions";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    // Implement your sign-up logic here
    const signupData = await signup({
      email: email,
      password: password,
    });

    console.log("Sign Up clicked", signupData);
    const data = await insertUser({
      id: signupData?.data?.user?.id,
      email: signupData?.data?.user?.email,
      designation: "developer",
    });

    console.log(data);
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
