export const passwordValidet = {
  required: "⚠ Required field",
  pattern: {
    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,20}$/,
    message:
      "⚠ Password must contain an uppercase letter, a lowercase letter, a digit, a special character, and be 8-20 characters long.",
  },
};
export const emailValidet = {
  required: "⚠ Required field",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "⚠ Invalid email address",
  },
};
export const nameValidet = {
  required: "⚠ Required field",
  minLength: {
    value: 2,
    message: "⚠ Must be at least two characters",
  },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "⚠ Please enter correct values",
  },
};

export const middelName = {
  minLength: {
    value: 2,
    message: "⚠ Must be at least two characters",
  },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "⚠ Please enter correct values",
  },
};

export const phoneValidet = {
  required: "⚠ Required field",
  pattern: {
    value: /^\d{7}$/,
    message: "⚠ Invalid Phone Number",
  },
};
export const requiredValidet = {
  required: "⚠ Required field",
};
export const houseValidet = {
  required: "⚠ Required field",
  pattern: {
    value: /^[0-9]+$/,
    message: "⚠ Invalid House Number",
  },
};

export const idValidet = {
  required: "⚠ Required field",
  pattern: {
    value: /^\w{5,10}$/,
    message: "⚠ Invalid Personal ID",
  },
};
