import { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Register.css";
import validateRegister from "./validate.js";
import { registerUser } from "../../../services/account";
import { useNavigate } from "react-router-dom";

const Register = ({ setIsRegister }) => {
  const navigate = useNavigate();
  const [registerData, setRegisterDataData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [registerErrors, setRegisterErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterDataData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateRegister(registerData);
    setRegisterErrors(errors);

    if (!Object.keys(errors).length) {
      const { passwordRepeat, ...rest } = registerData;
      const response = await registerUser(rest);
      if (response?.accessToken) {
        localStorage.setItem("authToken", response.accessToken);
        navigate(`/home`);
      } else {
        setRegisterErrors({ ...registerErrors, email: response });
      }
    } else {
      console.log("Register is invalid");
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
        error={registerErrors.userName}
        helperText={registerErrors.userName}
        variant="outlined"
      />
      <TextField
        className="input"
        type="text"
        label="First Name:"
        name="firstName"
        value={registerData.firstName}
        onChange={handleChange}
        error={registerErrors.firstName}
        helperText={registerErrors.firstName}
        variant="outlined"
      />
      <TextField
        className="input"
        type="text"
        label="Last Name:"
        name="lastName"
        value={registerData.lastName}
        onChange={handleChange}
        error={registerErrors.lastName}
        helperText={registerErrors.lastName}
        variant="outlined"
      />
      <TextField
        className="input"
        type="text"
        label="Phone Number:"
        name="phoneNumber"
        value={registerData.phoneNumber}
        onChange={handleChange}
        error={registerErrors.phoneNumber}
        helperText={registerErrors.phoneNumber}
        variant="outlined"
      />
      <TextField
        className="input"
        type="text"
        label="Email:"
        name="email"
        value={registerData.email}
        onChange={handleChange}
        error={registerErrors.email}
        helperText={registerErrors.email}
        variant="outlined"
      />
      <TextField
        className="input"
        type="password"
        label="Password:"
        name="password"
        value={registerData.password}
        onChange={handleChange}
        error={registerErrors.password}
        helperText={registerErrors.password}
        variant="outlined"
      />
      <TextField
        className="input"
        type="password"
        label="Repeat Password:"
        name="passwordRepeat"
        value={registerData.passwordRepeat}
        onChange={handleChange}
        error={registerErrors.passwordRepeat}
        helperText={registerErrors.passwordRepeat}
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
