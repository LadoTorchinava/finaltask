import { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Login.css";

const Login = ({ setIsRegister }) => {
  const [loginData, setLoginData] = useState({
    userName: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();

    // const errors = validateLogin(loginData);
    // setLoginErrors(errors);

    // if (!Object.keys(errors).length) {
    //   console.log(loginData);
    // } else {
    //   console.log("Login is invalid");
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        className="input"
        type="text"
        label="UserName:"
        name="userName"
        value={loginData.userName}
        onChange={handleChange}
        variant="outlined"
        error={loginErrors.userName}
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
