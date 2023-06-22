import "./Login.css";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { loginUser } from "../../../services/account";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsRegister }) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [loginErrors, setLoginErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginUser(loginData);

    if (response.accessToken) {
      localStorage.setItem("authToken", response.accessToken);
      navigate(`/home`);
    } else {
      setLoginErrors({ email: response });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        className="input"
        type="text"
        label="Email:"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        variant="outlined"
        error={loginErrors.email}
      />
      <TextField
        className="input"
        type="password"
        label="Password:"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        variant="outlined"
        error={loginErrors.password}
      />
      <div className="bottom">
        <Button type="submit" variant="contained">
          Log In
        </Button>
        <Button onClick={() => setIsRegister(true)}>Sign Up</Button>
      </div>
    </form>
  );
};

export default Login;
