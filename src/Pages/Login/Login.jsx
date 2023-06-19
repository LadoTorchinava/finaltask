import { useState } from "react";
import "./Login.css";
import Register from "../../components/Forms/Register/Register";
import Login from "../../components/Forms/Login/Login";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      {isRegister ? (
        <Register setIsRegister={setIsRegister} />
      ) : (
        <Login setIsRegister={setIsRegister} />
      )}
    </>
  );
};

export default LoginPage;
