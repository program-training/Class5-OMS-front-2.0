import { Grid, TextField } from "@mui/material";
import { EmailInputInterface } from "../../interfaces/EmailInputInterface";
import { FC } from "react";

const EmailInputIn: FC<EmailInputInterface> = ({
  register,
  emailValidet,
  errors,
}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="emailIn"
          label="Email Address"
          autoComplete="email"
          autoFocus
          {...register("email", emailValidet)}
          helperText={errors.email?.message?.toString()}
          error={errors.email ? true : false}
        />
      </Grid>
    </>
  );
};

export default EmailInputIn;
