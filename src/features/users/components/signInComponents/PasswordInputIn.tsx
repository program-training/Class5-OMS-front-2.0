import { Grid, TextField, IconButton, InputAdornment } from "@mui/material";
import { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { PasswordInputInterface } from "../../interfaces/PasswordInputInterface";

const PasswordInputIn: FC<PasswordInputInterface> = ({
  register,
  errors,
  passwordValidet,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Grid item xs={12}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Password"
        type={showPassword ? "text" : "password"}
        id="password"
        autoComplete="current-password"
        {...register("password", passwordValidet)}
        helperText={errors.password?.message?.toString()}
        error={errors.password ? true : false}
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

export default PasswordInputIn;
