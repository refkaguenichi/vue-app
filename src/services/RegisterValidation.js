import { checkEmail, minLength } from "./Validations";

export default function SignupValidations(email, password) {
  let errors = [];
  //email validations
  if (!checkEmail(email)) {
    errors["email"] = "Invalid Email";
  }

  //password Validations
  if (!minLength(password, 6)) {
    errors["password"] = "password should be of 6 characters";
  }
  return errors;
}
