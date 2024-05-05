export const signInFormValidation = (email, password) => {
  const isValidEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isValidPassword =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      password
    );

  if (!isValidEmail) {
    return "Email ID is invalid!";
  }

  if (!isValidPassword) {
    return "Password is invalid!";
  }

  return null;
};

export const signUpFormValidation = (email, password, name) => {
  const isValidEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isValidPassword =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      password
    );

  const isValidName = /^([\w]{3,})+\s+([\w\s]{3,})+$/i.test(name);

  if (!isValidEmail) {
    return "Email ID is invalid!";
  }

  if (!isValidPassword) {
    return "Password is invalid!";
  }

  if (!isValidName) {
    return "Name is Invalid";
  }

  return null;
};
