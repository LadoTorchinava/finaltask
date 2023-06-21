import { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Register.css";
import validateRegister from "./validate.js";

const Register = ({ setIsRegister }) => {
  const [registerData, setRegisterDataData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [loginErrors, setLoginErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterDataData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateRegister(registerData);
    setLoginErrors(errors);

    if (!Object.keys(errors).length) {
      console.log(registerData);
    } else {
      console.log("Login is invalid");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        className="input"
        type="text"
        label="UserName:"
        name="userName"
        value={registerData.userName}
        onChange={handleChange}
        error={loginErrors.userName}
        variant="outlined"
      />
      <TextField
        className="input"
        type="text"
        label="First Name:"
        name="firstName"
        value={registerData.firstName}
        onChange={handleChange}
        error={loginErrors.firstName}
        variant="outlined"
      />
      <TextField
        className="input"
        type="text"
        label="Last Name:"
        name="lastName"
        value={registerData.lastName}
        onChange={handleChange}
        error={loginErrors.lastName}
        variant="outlined"
      />
      <TextField
        className="input"
        type="text"
        label="Phone Number:"
        name="phoneNumber"
        value={registerData.phoneNumber}
        onChange={handleChange}
        error={loginErrors.phoneNumber}
        variant="outlined"
      />
      <TextField
        className="input"
        type="text"
        label="Email@:"
        name="email"
        value={registerData.email}
        onChange={handleChange}
        error={loginErrors.email}
        variant="outlined"
      />
      <TextField
        className="input"
        type="password"
        label="Password:"
        name="password"
        value={registerData.password}
        onChange={handleChange}
        error={loginErrors.password}
        variant="outlined"
      />
      <TextField
        className="input"
        type="password"
        label="Repeat Password:"
        name="passwordRepeat"
        value={registerData.passwordRepeat}
        onChange={handleChange}
        error={loginErrors.passwordRepeat}
        variant="outlined"
      />
      <div className="bottom">
        <Button type="submit" variant="contained">
          Register
        </Button>
        <Button onClick={() => setIsRegister(false)}>Sign In</Button>
      </div>
    </form>
  );
};

export default Register;
