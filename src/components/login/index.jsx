import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getBlogs, insertBlog, login } from "../../supabaseFunctions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // Implement your login logic here
    const signupData = await login({
      email: email,
      password: password,
    });
    console.log("Sign Up clicked", signupData);
    console.log("Login clicked");
    // const dataBlog = await insertBlog({
    //   user_id: signupData?.data?.user?.id,
    //   title: signupData?.data?.user?.email,
    //   content: signupData?.data?.user?.email,
    // });
    // console.log(dataBlog);
  };
  const navigate = useNavigate();

  useEffect(() => {
    console.log("wow");
    // getBlogsData();
  }, []);

  const getBlogsData = async () => {
    const blogs = await getBlogs(`*,Users(*)`);
    console.log(blogs);
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
