import { Grid, TextField } from "@mui/material";
import { FC } from "react";
import { EmailInputInterface } from "../../interfaces/EmailInputInterface";

const EmailInput: FC<EmailInputInterface> = ({
  register,
  emailValidet,
  errors,
  email,
  // onEmailChange,
}) => {
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   onEmailChange!(e.target.value);
  // };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
          value={email}
          {...register("email", emailValidet)}
          helperText={errors.email?.message?.toString()}
          error={errors.email ? true : false}
        />
      </Grid>
    </>
  );
};

export default EmailInput;
