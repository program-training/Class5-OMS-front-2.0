import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { emailValidet, passwordValidet } from "../../helpers/validation";
import { useForm } from "react-hook-form";
import { Copyright } from "../../../layout/Copyright";
import SignUpButton from "./SignUpButton";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import ConfirmPasswordInputIn from "./ConfirmPasswordInput";
import { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

export const SignUp = () => {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const [isadmin, setIsadmin] = useState<boolean>(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => e.preventDefault()}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <EmailInput
              register={register}
              errors={errors}
              emailValidet={emailValidet}
            />
            <PasswordInput
              register={register}
              errors={errors}
              passwordValidet={passwordValidet}
            />
            <ConfirmPasswordInputIn
              register={register}
              errors={errors}
              watch={watch}
            />
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Admin"
            id="admin"
            onChange={() => {
              setIsadmin(!isadmin);
            }}
          />
          <SignUpButton
            text="Sign Up"
            isValid={isValid}
            watch={watch}
            isAdmin={isadmin}
          />
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
