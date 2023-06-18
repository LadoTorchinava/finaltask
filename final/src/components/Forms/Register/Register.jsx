import { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <label>
        UserName:
        <input
          type="text"
          name="userName"
          value={registerData.userName}
          onChange={handleChange}
        />
        {loginErrors.userName && <span>{loginErrors.userName}</span>}
      </label>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={registerData.firstName}
          onChange={handleChange}
        />
        {loginErrors.firstName && <span>{loginErrors.firstName}</span>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={registerData.lastName}
          onChange={handleChange}
        />
        {loginErrors.lastName && <span>{loginErrors.lastName}</span>}
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={registerData.phoneNumber}
          onChange={handleChange}
        />
        {loginErrors.phoneNumber && <span>{loginErrors.phoneNumber}</span>}
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={registerData.email}
          onChange={handleChange}
        />
        {loginErrors.email && <span>{loginErrors.email}</span>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={handleChange}
        />
        {loginErrors.password && <span>{loginErrors.password}</span>}
      </label>
      <label>
        Repeat Password:
        <input
          type="password"
          name="passwordRepeat"
          value={registerData.passwordRepeat}
          onChange={handleChange}
        />
        {loginErrors.passwordRepeat && (
          <span>{loginErrors.passwordRepeat}</span>
        )}
      </label>
      <br />
      <button type="submit">Register</button>
      <button onClick={() => setIsRegister(false)}>Sign In</button>
    </form>
  );
};

export default Register;
