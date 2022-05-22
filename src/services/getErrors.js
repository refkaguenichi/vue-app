export const getErrors = (errCode) => {
  switch (errCode) {
    case "EMAIL_EXISTS":
      return "Email already exists";
    case "EMAIL_NOT_FOUND":
      return "Email Not Found";
    case "INVALID_PASSWORD":
      return "Invalid Password";
    default:
      return "Unexpected error occurred. Please try again";
  }
};
