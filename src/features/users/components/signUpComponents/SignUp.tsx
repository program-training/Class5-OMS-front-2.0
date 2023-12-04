import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { emailValidet, passwordValidet } from "../../helpers/validation";
import { FieldValues, useForm } from "react-hook-form";
import { Copyright } from "../../../layout/Copyright";
import SignUpButton from "./SignUpButton";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";
import ConfirmPasswordInputIn from "./ConfirmPasswordInput";
import IsAdminComponent from "./IsAdminComponent";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (event: FieldValues) => {
    event.preventDefault();
  };

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
          onSubmit={handleSubmit(onSubmit)}
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
          <IsAdminComponent />
          <SignUpButton text="Sign Up" isValid={isValid} watch={watch} />
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
