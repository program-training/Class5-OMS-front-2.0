// With God's Help

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface PasswordInputInterface {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  passwordValidet: {
    required: string;
    pattern: {
      value: RegExp;
      message: string;
    };
  };
}
