import { useState } from "react";
import "./Login.css";

// const Login = () => {
//   return (
//     <>
//       <h1>something</h1>
//     </>
//   );
// };

const Login = () => {
  const [loginData, setLoginData] = useState({
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
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateLogin();
    setLoginErrors(errors);

    if (!Object.keys(errors).length) {
      console.log(loginData);
    } else {
      console.log("Login is invalid");
    }
  };

  const validateLogin = () => {
    const errors = {};

    if (loginData.userName.trim() === "") {
      errors.userName = "UserName is REQUIRED!!!";
    }
    if (
      loginData.userName.trim().length < 3 ||
      loginData.userName.trim().length > 12
    ) {
      errors.userName = "UserName should be from 3 to 12 letters!!!";
    }
    if (loginData.firstName.trim() === "") {
      errors.firstName = "First name is REQUIRED!!!";
    }
    if (loginData.lastName.trim() === "") {
      errors.lastName = "Last name is REQUIRED!!!";
    }
    if (loginData.phoneNumber.trim() === "") {
      errors.phoneNumber = "Phone Number date is REQUIRED!!!";
    }
    if (isNaN(loginData.phoneNumber.trim())) {
      errors.phoneNumber = "Phone Number should be only NUMBERS!!!";
    }
    if (loginData.email.trim() === "") {
      errors.email = "Email is REQUIRED!!!";
    } else if (!isValidEmail(loginData.email)) {
      errors.email = "Email is INVALID!!!";
    }
    if (loginData.password.trim() === "") {
      errors.password = "Password is REQUIRED!!!";
    }
    if (
      loginData.password.trim().length < 6 ||
      loginData.password.trim().length > 20
    ) {
      errors.password = "Password requires !!! ";
    }
    if (loginData.passwordRepeat.trim() === "") {
      errors.passwordRepeat = "Password Repeat is REQUIRED!!!";
    }
    if (loginData.password !== loginData.passwordRepeat) {
      errors.passwordRepeat = "Password Repeat is not same as Password";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName:
        <input
          type="text"
          name="userName"
          value={loginData.userName}
          onChange={handleChange}
        />
        {loginErrors.userName && <span>{loginErrors.userName}</span>}
      </label>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={loginData.firstName}
          onChange={handleChange}
        />
        {loginErrors.firstName && <span>{loginErrors.firstName}</span>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={loginData.lastName}
          onChange={handleChange}
        />
        {loginErrors.lastName && <span>{loginErrors.lastName}</span>}
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={loginData.phoneNumber}
          onChange={handleChange}
        />
        {loginErrors.phoneNumber && <span>{loginErrors.phoneNumber}</span>}
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={loginData.email}
          onChange={handleChange}
        />
        {loginErrors.email && <span>{loginErrors.email}</span>}
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        {loginErrors.password && <span>{loginErrors.password}</span>}
      </label>
      <label>
        Repeat Password:
        <input
          type="password"
          name="passwordRepeat"
          value={loginData.passwordRepeat}
          onChange={handleChange}
        />
        {loginErrors.passwordRepeat && (
          <span>{loginErrors.passwordRepeat}</span>
        )}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
