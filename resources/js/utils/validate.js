// check email validity
export const isValidEmail = (val) => {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || "Invalid email";
};

// check fullname validity
export const isValidFullName = (name) => {
  const validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  return validNamePattern.test(name) || "Numerical values are not required";
};

// check passwords validity
export const isValidPWd = (val) =>
  val.length >= 7 || "Please use minimum 7 characters";

// check if passwords are the same
export const confirmPassword = (password) => {
  return [
    (v) => !!v || "Confirm password is required",
    (v) => v === password || "passwords are not the same, please check",
  ];
};
