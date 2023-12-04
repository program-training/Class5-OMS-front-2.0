import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { FieldValues, useForm } from "react-hook-form";
import { Copyright } from "../../../layout/Copyright";
import EmailInputIn from "./EmailInputIn";
import PasswordInputIn from "./PasswordInputIn";
import { emailValidet, passwordValidet } from "../../helpers/validation";
import HeaderSignIn from "./HeaderSignIn";
import FooterSignIn from "./RememberMeSignIn";
import SignInLink from "./SignInLink";
import Grid from "@mui/material/Grid";
import SignInButton from "./SignInButton";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (event: FieldValues) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
        <HeaderSignIn />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <EmailInputIn
              register={register}
              emailValidet={emailValidet}
              errors={errors}
            />
            <PasswordInputIn
              register={register}
              passwordValidet={passwordValidet}
              errors={errors}
            />
          </Grid>
          <FooterSignIn />
          <SignInLink text="signUp" />
          <SignInButton
            text="Sign In"
            isValid={isValid}
            watch={watch}
          ></SignInButton>
          {/* <SignInButton text="Sign In" isValid={isValid} /> */}
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};
