import { useState } from "react";
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
        Password:
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        {loginErrors.password && <span>{loginErrors.password}</span>}
      </label>

      <br />
      <button type="submit">Log In</button>
      <button onClick={() => setIsRegister(true)}>Sign Up</button>
    </form>
  );
};

export default Login;
