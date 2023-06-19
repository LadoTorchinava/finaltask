const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateRegister = (registerData) => {
  const errors = {};

  if (registerData.userName.trim() === "") {
    errors.userName = "UserName is REQUIRED!!!";
  }
  if (
    registerData.userName.trim().length < 3 ||
    registerData.userName.trim().length > 12
  ) {
    errors.userName = "UserName should be from 3 to 12 letters!!!";
  }
  if (registerData.firstName.trim() === "") {
    errors.firstName = "First name is REQUIRED!!!";
  }
  if (registerData.lastName.trim() === "") {
    errors.lastName = "Last name is REQUIRED!!!";
  }
  if (registerData.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone Number date is REQUIRED!!!";
  }
  if (isNaN(registerData.phoneNumber.trim())) {
    errors.phoneNumber = "Phone Number should be only NUMBERS!!!";
  }
  if (registerData.email.trim() === "") {
    errors.email = "Email is REQUIRED!!!";
  } else if (!isValidEmail(registerData.email)) {
    errors.email = "Email is INVALID!!!";
  }
  if (registerData.password.trim() === "") {
    errors.password = "Password is REQUIRED!!!";
  }
  if (
    registerData.password.trim().length < 6 ||
    registerData.password.trim().length > 20
  ) {
    errors.password = "Password requires !!! ";
  }
  if (registerData.passwordRepeat.trim() === "") {
    errors.passwordRepeat = "Password Repeat is REQUIRED!!!";
  }
  if (registerData.password !== registerData.passwordRepeat) {
    errors.passwordRepeat = "Password Repeat is not same as Password";
  }

  return errors;
};

export default validateRegister;
