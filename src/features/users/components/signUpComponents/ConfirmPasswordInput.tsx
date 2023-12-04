import { Grid, TextField, IconButton, InputAdornment } from "@mui/material";
import { ConfirmPasswordInterface } from "../../interfaces/ConfirmPasswordInterface";
import { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const ConfirmPasswordInput: FC<ConfirmPasswordInterface> = ({
  register,
  errors,
  watch,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        label="Confirm Password"
        type={showPassword ? "text" : "password"}
        id="confirm_password"
        autoComplete="confirm password"
        {...register("confirm_password", {
          required: true,
          validate: (val: string) => {
            if (watch("password") !== val) {
              return "Your passwords do not match";
            }
          },
        })}
        helperText={errors.confirm_password?.message?.toString()}
        error={errors.confirm_password ? true : false}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default ConfirmPasswordInput;
